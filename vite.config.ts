import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import { appProjects } from './src/content/apps'

const projectRoutes = appProjects.flatMap((project) => [
  `/${project.slug}`,
  `/${project.slug}/policy`,
  `/${project.slug}/terms-and-conditions`,
  `/${project.slug}/eula`,
])

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    includedRoutes(paths) {
      return Array.from(
        new Set([
          ...paths.filter((path) => !path.includes(':') && !path.includes('*')),
          ...projectRoutes,
        ]),
      )
    },
  },
})
