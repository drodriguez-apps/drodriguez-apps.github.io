import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import vm from 'node:vm'

const distDir = process.argv[2] || 'dist'
const resolvedDistDir = path.resolve(distDir)

if (!fs.existsSync(resolvedDistDir)) {
  console.error(`Pages artifact validation failed: missing directory ${resolvedDistDir}.`)
  process.exit(1)
}

const requiredPages = [
  {
    relativePath: 'index.html',
    expectedContent: ['<title>DRodriguez Apps</title>', '<div id="app"'],
  },
  {
    relativePath: '404.html',
    expectedContent: ['redirectInvitePath', '/tandapp/invite/'],
  },
  {
    relativePath: path.join('invite', 'index.html'),
    expectedContent: ['/tandapp/invite/'],
  },
  {
    relativePath: path.join('tandaap', 'join', 'index.html'),
    expectedContent: ['/tandapp/invite/'],
  },
  {
    relativePath: path.join('tandapp', 'invite', 'index.html'),
    expectedContent: ['Unirse a la tanda | Tandapp', 'inviteBaseUrl'],
  },
]

function collectHtmlFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true })

  return entries.flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      return collectHtmlFiles(fullPath)
    }

    return entry.isFile() && entry.name.endsWith('.html') ? [fullPath] : []
  })
}

function extractInlineScripts(html) {
  return [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter((match) => {
      const attributes = match[1] || ''
      const typeMatch = attributes.match(/\btype\s*=\s*['"]([^'"]+)['"]/i)
      if (!typeMatch) {
        return true
      }

      const type = typeMatch[1].trim().toLowerCase()
      return (
        type === 'module' ||
        type === 'text/javascript' ||
        type === 'application/javascript' ||
        type === 'text/ecmascript' ||
        type === 'application/ecmascript'
      )
    })
    .map((match) => match[2])
    .filter((content) => content.trim().length > 0)
}

const htmlFiles = collectHtmlFiles(resolvedDistDir)
const errors = []

for (const filePath of htmlFiles) {
  const relativePath = path.relative(resolvedDistDir, filePath)
  const html = fs.readFileSync(filePath, 'utf8')

  if (html.includes('/src/main.ts')) {
    errors.push(`Built page still references /src/main.ts: ${relativePath}`)
  }

  const inlineScripts = extractInlineScripts(html)
  for (const [index, scriptContent] of inlineScripts.entries()) {
    try {
      new vm.Script(scriptContent, {
        filename: `${relativePath}#inline-script-${index + 1}`,
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      errors.push(`Invalid inline script in ${relativePath}: ${message}`)
    }
  }
}

for (const page of requiredPages) {
  const filePath = path.join(resolvedDistDir, page.relativePath)

  if (!fs.existsSync(filePath)) {
    errors.push(`Missing required Pages file: ${page.relativePath}`)
    continue
  }

  const html = fs.readFileSync(filePath, 'utf8')
  for (const expectedSnippet of page.expectedContent) {
    if (!html.includes(expectedSnippet)) {
      errors.push(`Missing expected content in ${page.relativePath}: ${expectedSnippet}`)
    }
  }
}

const rootHtml = fs.readFileSync(path.join(resolvedDistDir, 'index.html'), 'utf8')
if (!/\/assets\/app-[^"']+\.js/.test(rootHtml)) {
  errors.push('Built root page does not reference the generated app bundle under /assets/.')
}

if (errors.length > 0) {
  console.error('Pages artifact validation failed.')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log(`Pages artifact validation passed for ${htmlFiles.length} HTML files.`)
