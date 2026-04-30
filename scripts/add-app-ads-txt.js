#!/usr/bin/env node
/**
 * Copy root app-ads.txt into each app directory under public
 * so that each app URL path (e.g. /tandapp, /invite) exposes app-ads.txt
 * at its root (e.g. /tandapp/app-ads.txt).
 */
#!/usr/bin/env node
/**
 * Copy root app-ads.txt into each app directory under public
 * so that each app URL path (e.g. /tandapp, /invite) exposes app-ads.txt
 * at its root (e.g. /tandapp/app-ads.txt).
 */
import { readFile, writeFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

async function hasIndexUnder(dir) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return false
  }
  for (const e of entries) {
    if (e.isFile() && e.name.toLowerCase() === 'index.html') return true
  }
  // Recurse into subdirectories
  for (const e of entries) {
    if (e.isDirectory()) {
      if (await hasIndexUnder(join(dir, e.name))) return true
    }
  }
  return false
}

async function main() {
  const root = process.cwd()
  const publicDir = join(root, 'public')
  const appAdsSrc = join(root, 'app-ads.txt')

  // Ensure source exists
  let srcExists = true
  try {
    await readFile(appAdsSrc)
  } catch {
    srcExists = false
  }
  if (!srcExists) {
    console.warn('Warning: app-ads.txt not found at repo root. Skipping copy.')
    return
  }

  // Discover app roots under public by finding directories that contain index.html somewhere inside
  let publicEntries
  try {
    publicEntries = await readdir(publicDir, { withFileTypes: true })
  } catch (err) {
    console.error('Public directory not found:', publicDir)
    process.exit(1)
  }

  const candidateDirs = publicEntries.filter((e) => e.isDirectory()).map((e) => join(publicDir, e.name))
  const appRoots = []
  for (const dir of candidateDirs) {
    if (await hasIndexUnder(dir)) {
      appRoots.push(dir)
    }
  }

  // Copy app-ads.txt into each app root as app-ads.txt
  for (const appRoot of appRoots) {
    const target = join(appRoot, 'app-ads.txt')
    try {
      await writeFile(target, await readFile(appAdsSrc))
      console.log(`Copied app-ads.txt to ${target}`)
    } catch (err) {
      console.warn(`Could not copy to ${target}:`, (err as any)?.message ?? err)
    }
  }
}

main().catch((err) => {
  console.error('Error while copying app-ads.txt:', err)
  process.exit(1)
})
