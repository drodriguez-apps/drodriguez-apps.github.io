import type { SiteLocale } from '@/types/content'

export const defaultLocale: SiteLocale = 'en'
export const supportedLocales: SiteLocale[] = ['en', 'es']

export const messages = {
  en: {
    brand: 'Axis Labs',
    nav: {
      home: 'Home',
      apps: 'Apps',
      approach: 'System',
      process: 'Process',
      contact: 'Contact',
    },
    locale: {
      en: 'English',
      es: 'Spanish',
    },
    actions: {
      browseApps: 'Browse apps',
      email: 'Start a conversation',
      openProject: 'Open project',
      openStore: 'View on Google Play',
      openAppStore: 'View on App Store',
      backToApps: 'Back to apps',
      policy: 'Privacy policy',
      terms: 'Terms and conditions',
      eula: 'End-user license agreement (EULA)',
    },
    labels: {
      overview: 'Overview',
      highlights: 'Highlights',
      legal: 'Legal',
      related: 'More apps',
      allApps: 'All apps',
    },
    home: {
      eyebrow: 'Android and iOS apps built for real-world use',
      title: 'A mobile development studio focused on shipping polished, scalable products.',
      lead: 'This Vue site powers our app catalog with bilingual copy, reusable sections, and dedicated legal pages for store compliance.',
      featuredTitle: 'Our Apps.',
      featuredLead:
        'We handle every aspect of app creation — design, front-end and back-end development, marketing websites, SEO, ASO, store screenshots, CI/CD, and beyond. A full-cycle approach, no hand-offs needed.',
      catalogTitle: 'Current app catalog',
      catalogLead:
        'Productivity, finance, education, and party concepts designed for clear, practical user flows.',
      approachTitle: 'How we build',
      approachLead:
        'Reusable components, static rendering, and content-driven routes keep the site fast and every app easy to expand.',
      contactTitle: 'Need a mobile developer?',
      contactLead:
        'We build Android and iOS products, marketing pages, and release-ready support content.',
    },
    app: {
      factsLead: 'Android and iOS are live today.',
      legalLead:
        'Each project can ship policy and terms routes without duplicating layout or content structure.',
      relatedLead: 'Explore more releases from the same studio.',
    },
    legal: {
      intro: 'This document applies to',
      back: 'Back to project',
    },
    footer: {
      navigate: 'Navigate',
      connect: 'Connect',
      legalHint: 'Professional cross-platform apps built with Flutter and designed for quality.',
    },
    notFound: {
      title: 'Page not found',
      lead: 'The route you requested is not available. Use the home page to browse our apps.',
      cta: 'Return home',
    },
  },
  es: {
    brand: 'Axis Labs',
    nav: {
      home: 'Inicio',
      apps: 'Apps',
      approach: 'Sistema',
      process: 'Proceso',
      contact: 'Contacto',
    },
    locale: {
      en: 'Inglés',
      es: 'Español',
    },
    actions: {
      browseApps: 'Ver apps',
      email: 'Empezar una conversación',
      openProject: 'Abrir proyecto',
      openStore: 'Ver en Google Play',
      openAppStore: 'Ver en App Store',
      backToApps: 'Volver a las apps',
      policy: 'Política de privacidad',
      terms: 'Términos y condiciones',
      eula: 'Acuerdo de licencia de usuario final (EULA)',
    },
    labels: {
      overview: 'Resumen',
      highlights: 'Puntos clave',
      legal: 'Legal',
      related: 'Más apps',
      allApps: 'Todas las apps',
    },
    home: {
      eyebrow: 'Apps Android e iOS creadas para uso real',
      title: 'Un estudio de desarrollo mobile centrado en lanzar productos pulidos y escalables.',
      lead: 'Este sitio en Vue impulsa nuestro catálogo de apps con copia bilingüe, secciones reutilizables y páginas legales dedicadas para cumplimiento en tienda.',
      featuredTitle: 'Nuestras Apps.',
      featuredLead:
        'Manejamos cada aspecto de la creación de apps — diseño, front-end y back-end, sitios de marketing, SEO, ASO, capturas para la tienda, CI/CD y más. Un enfoque de ciclo completo, sin necesidad de terceros.',
      catalogTitle: 'Catálogo actual',
      catalogLead:
        'Productividad, finanzas, educación y conceptos party pensados para flujos de uso claros y prácticos.',
      approachTitle: 'Cómo trabajamos',
      approachLead:
        'Los componentes reutilizables, el renderizado estático y las rutas guiadas por contenido mantienen el sitio rápido y cada app fácil de ampliar.',
      contactTitle: '¿Necesitas un desarrollador mobile?',
      contactLead:
        'Construimos productos Android e iOS, páginas de marketing y contenido de soporte listo para publicar.',
    },
    app: {
      factsLead: 'Android e iOS están publicados hoy.',
      legalLead:
        'Cada proyecto puede publicar rutas de política y términos sin duplicar layout ni estructura de contenido.',
      relatedLead: 'Explora más lanzamientos del mismo estudio.',
    },
    legal: {
      intro: 'Este documento aplica a',
      back: 'Volver al proyecto',
    },
    footer: {
      navigate: 'Navega',
      connect: 'Conecta',
      legalHint: 'Apps multiplataforma profesionales, desarrolladas con Flutter y pensadas para la calidad.',
    },
    notFound: {
      title: 'Página no encontrada',
      lead: 'La ruta solicitada no está disponible. Usa la portada para explorar nuestras apps.',
      cta: 'Volver al inicio',
    },
  },
} as const

export function resolvePreferredLocale(): SiteLocale {
  if (typeof window === 'undefined') {
    return defaultLocale
  }

  const storedLocale = window.localStorage.getItem('site-locale')

  if (storedLocale === 'en' || storedLocale === 'es') {
    return storedLocale
  }

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function persistLocale(locale: SiteLocale): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem('site-locale', locale)
}
