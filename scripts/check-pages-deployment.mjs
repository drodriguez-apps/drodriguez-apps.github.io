import process from 'node:process'

const targetUrl = process.argv[2]

if (!targetUrl) {
  console.error('Usage: node scripts/check-pages-deployment.mjs <url>')
  process.exit(1)
}

const retries = 12
const delayMs = 10000

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`)
  }

  return response.text()
}

let html = ''
let lastError = null

for (let attempt = 1; attempt <= retries; attempt += 1) {
  try {
    html = await fetchHtml(targetUrl)
    lastError = null
    break
  } catch (error) {
    lastError = error

    if (attempt < retries) {
      console.log(`Waiting for Pages propagation (${attempt}/${retries})...`)
      await sleep(delayMs)
    }
  }
}

if (lastError) {
  console.error(`Failed to fetch deployed site after ${retries} attempts.`)
  console.error(lastError instanceof Error ? lastError.message : String(lastError))
  process.exit(1)
}

if (html.includes('/src/main.ts')) {
  console.error('Deployment smoke test failed: live site still references /src/main.ts.')
  console.error('Check GitHub Pages settings and set Source to GitHub Actions.')
  process.exit(1)
}

if (!html.includes('/assets/app-')) {
  console.error(
    'Deployment smoke test failed: live site does not reference the built app bundle under /assets/.',
  )
  process.exit(1)
}

console.log('Deployment smoke test passed.')
