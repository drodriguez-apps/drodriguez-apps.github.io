import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import { defaultLocale, messages, persistLocale, resolvePreferredLocale } from './i18n/messages'
import { routes } from './router/routes'
import './styles/main.scss'

function resolveHeaderOffset(): number {
  if (typeof document === 'undefined') {
    return 0
  }

  const header = document.querySelector<HTMLElement>('.site-header')

  if (header) {
    return Math.ceil(header.getBoundingClientRect().height + 16)
  }

  const cssOffset = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--header-offset')
    .trim()
  const parsedOffset = Number.parseFloat(cssOffset)

  return Number.isFinite(parsedOffset) ? Math.ceil(parsedOffset + 16) : 0
}

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, _from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          top: resolveHeaderOffset(),
          behavior: 'smooth',
        }
      }

      return savedPosition ?? { top: 0 }
    },
  },
  ({ app, isClient }) => {
    const i18n = createI18n({
      legacy: false,
      locale: defaultLocale,
      fallbackLocale: defaultLocale,
      messages,
    })

    app.use(i18n)

    if (isClient) {
      const preferredLocale = resolvePreferredLocale()

      i18n.global.locale.value = preferredLocale

      watch(
        i18n.global.locale,
        (locale) => {
          document.documentElement.lang = locale
          persistLocale(locale)
        },
        { immediate: true },
      )
    }
  },
)

export function includedRoutes(paths: string[]) {
  return paths.filter((path) => !path.includes(':') && !path.includes('*'))
}
