# DRodriguez Apps

Live site: https://drodriguez-apps.github.io

## Deployment

This site is built with Vite + Vue and deployed to GitHub Pages from the generated `dist/` artifact.

Required repository setting:

- GitHub repository Settings > Pages > Build and deployment > Source must be set to `GitHub Actions`.

Why this matters:

- The repository root `index.html` is the Vite source entry and references `/src/main.ts` for local development.
- If Pages is configured to publish from the repository branch instead of GitHub Actions, the live site serves that source file directly.
- Browsers then request `/src/main.ts`, GitHub Pages serves it with the `video/mp2t` MIME type, and the app fails at runtime.

## Future Checks

After each deployment, verify these points:

1. Open https://drodriguez-apps.github.io
2. Confirm the page source references built assets under `/assets/` and does not reference `/src/main.ts`
3. Check the home page, one app route, and one legal route:
   - https://drodriguez-apps.github.io/
   - https://drodriguez-apps.github.io/the-impostor
   - https://drodriguez-apps.github.io/home-handy/terms-and-conditions
4. If the live site is blank and the browser console shows a MIME error for `/src/main.ts`, re-check the Pages source setting immediately

## Local Validation

```bash
npm ci
npm run check
```
