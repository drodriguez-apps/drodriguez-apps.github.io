import process from 'node:process'

const targetUrl = process.argv[2]

if (!targetUrl) {
  console.error('Usage: node scripts/check-pages-deployment.mjs <url>')
  process.exit(1)
}

const retries = 12
const delayMs = 10000

const criticalRoutes = [
  {
    path: '/',
    validate(html) {
      if (html.includes('/src/main.ts')) {
        throw new Error('live root still references /src/main.ts')
      }

      if (!html.includes('/assets/app-')) {
        throw new Error('live root does not reference the built app bundle under /assets/')
      }
    },
  },
  {
    path: '/tandapp/invite/?code=MITA5MCBERJA',
    validate(html) {
      if (
        html.includes('<title>Page not found') ||
        html.includes('The site configured at this address')
      ) {
        throw new Error('live invite route is returning the default GitHub Pages 404 page')
      }

      if (!html.includes('Unirse a la tanda | Tandapp')) {
        throw new Error('live invite route does not contain the Tandapp invite page markup')
      }
    },
  },
]

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

async function verifyRoute(baseUrl, route) {
  let lastError = null

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const routeUrl = new URL(route.path, baseUrl).toString()
      const html = await fetchHtml(routeUrl)
      route.validate(html)
      console.log(`Verified ${route.path}`)
      return
    } catch (error) {
      lastError = error

      if (attempt < retries) {
        console.log(`Waiting for Pages propagation for ${route.path} (${attempt}/${retries})...`)
        await sleep(delayMs)
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error(String(lastError))
}

try {
  for (const route of criticalRoutes) {
    await verifyRoute(targetUrl, route)
  }
} catch (error) {
  console.error('Deployment smoke test failed.')
  console.error(error instanceof Error ? error.message : String(error))
  console.error(
    'If the live root serves /src/main.ts or static invite routes 404, verify GitHub Pages is publishing the GitHub Actions artifact.',
  )
  process.exit(1)
}

console.log('Deployment smoke test passed.')
