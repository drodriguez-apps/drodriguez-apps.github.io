# Axis Labs

Live site: https://drodriguez-apps.github.io

## Deployment

This site is built with Vite + Vue and deployed to GitHub Pages from the generated `dist/` artifact.

Keep these deployment constraints in sync:

- The deploy workflow in `.github/workflows/deploy.yml` must listen to the active default branch. The repository currently deploys from `master`.
- GitHub Pages must publish the workflow artifact rather than serving the Vite source tree directly.

Why this matters:

- The repository root `index.html` is the Vite source entry and references `/src/main.ts` for local development.
- If the deploy workflow does not run for the active branch, or if Pages serves the source tree instead of the built artifact, the live site serves that source file directly.
- Browsers then request `/src/main.ts`, GitHub Pages serves it with the `video/mp2t` MIME type, and the app fails at runtime.

## Future Checks

After each deployment, verify these points:

1. Open https://drodriguez-apps.github.io
2. Confirm the latest run at https://github.com/drodriguez-apps/drodriguez-apps.github.io/actions/workflows/deploy.yml matches the newest `master` commit
3. Confirm the page source references built assets under `/assets/` and does not reference `/src/main.ts`
4. Check the home page, one app route, and one legal route:
   - https://drodriguez-apps.github.io/
   - https://drodriguez-apps.github.io/the-impostor
   - https://drodriguez-apps.github.io/home-handy/terms-and-conditions
5. If the live site is blank and the browser console shows a MIME error for `/src/main.ts`, first re-check the workflow trigger branch and then verify the Pages publishing source

## Local Validation

```bash
npm ci
npm run check
```
