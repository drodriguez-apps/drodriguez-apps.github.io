/**
 * Copy root app-ads.txt into dist for all app slugs defined in src/content/apps.ts
 */
import { writeFile, stat } from 'node:fs/promises'
import { readFile as readTextFile } from 'node:fs/promises'
import { join } from 'node:path'

function extractSlugsFromAppsTs(content) {
  const slugs = new Set()
  const re = /slug\s*[:=]\s*['"]([^'"]+)['"]/g
  let m
  while ((m = re.exec(content)) !== null) {
    slugs.add(m[1])
  }
  return Array.from(slugs)
}

async function distPathForSlug(root, slug) {
  const distRoot = join(root, 'dist')
  const candidates = [join(distRoot, slug), join(distRoot, 'apps', slug)]
  for (const p of candidates) {
    try {
      const st = await stat(p)
      if (st.isDirectory()) return p
    } catch {
      // ignore
    }
  }
  return null
}

async function main() {
  const root = process.cwd()
  const appAdsSrc = join(root, 'app-ads.txt')
  let adsContent
  try {
    adsContent = await readTextFile(appAdsSrc)
  } catch {
    console.warn('Warning: app-ads.txt not found at repo root. Skipping copy to dist.')
    return
  }

  // Read apps.ts to collect slugs
  const appsTsPath = join(root, 'src', 'content', 'apps.ts')
  let appsTs
  try {
    appsTs = await readTextFile(appsTsPath)
  } catch {
    console.error('Failed to read apps.ts at', appsTsPath)
    process.exit(1)
  }
  const slugs = extractSlugsFromAppsTs(appsTs)
  if (slugs.length === 0) {
    console.log('No slugs found in apps.ts; nothing to copy.')
    return
  }

  // Copy app-ads.txt into each dist slug directory if it exists
  for (const slug of slugs) {
    const distDir = await distPathForSlug(root, slug)
    if (!distDir) continue
    const target = join(distDir, 'app-ads.txt')
    try {
      await writeFile(target, adsContent)
      console.log(`Copied app-ads.txt to ${target}`)
    } catch (err) {
      console.warn(
        `Could not copy to ${target}:`,
        err && typeof err === 'object' ? err.message : err,
      )
    }
  }
}

main().catch((err) => {
  console.error('Error while copying app-ads.txt to dist:', err)
  process.exit(1)
})
