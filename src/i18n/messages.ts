import type { SiteLocale } from '@/types/content'

export const defaultLocale: SiteLocale = 'en'
export const supportedLocales: SiteLocale[] = ['en', 'es']

export const messages = {
  en: {
    brand: 'DRodriguez Apps',
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
      openCatalog: 'Open Google Play catalog',
      email: 'Start a conversation',
      linkedin: 'LinkedIn profile',
      openProject: 'Open project',
      openStore: 'View on Google Play',
      backToApps: 'Back to apps',
      policy: 'Privacy policy',
      terms: 'Terms and conditions',
    },
    labels: {
      overview: 'Overview',
      highlights: 'Highlights',
      legal: 'Legal',
      related: 'More from the portfolio',
      allApps: 'All apps',
    },
    home: {
      eyebrow: 'Android apps, launch pages, and client-ready product storytelling',
      title: 'A mobile app portfolio built to sell the product, not just list the screens.',
      lead: 'This Vue site turns each app into a scalable route with bilingual copy, reusable sections, and dedicated legal pages for store compliance and client trust.',
      featuredTitle: 'The Portfolio.',
      catalogTitle: 'Current app catalog',
      catalogLead:
        'Productivity, finance, education, and party concepts designed for clear, practical user flows.',
      approachTitle: 'How I build',
      approachLead:
        'Reusable components, static rendering, and content-driven routes keep the portfolio fast while making every app easier to expand.',
      contactTitle: 'Need a mobile developer?',
      contactLead:
        'I build Android products now and prepare them for iOS, marketing pages, and release-ready support content.',
    },
    app: {
      factsLead: 'Android is live today. iOS support is planned next.',
      legalLead:
        'Each project can ship policy and terms routes without duplicating layout or content structure.',
      relatedLead: 'Explore more releases from the same product portfolio.',
    },
    legal: {
      intro: 'This document applies to',
      back: 'Back to project',
    },
    footer: {
      navigate: 'Navigate',
      connect: 'Connect',
      legalHint: 'Every project page includes dedicated privacy and terms routes.',
    },
    notFound: {
      title: 'Page not found',
      lead: 'The route you requested is not available. Use the home page to browse the portfolio.',
      cta: 'Return home',
    },
  },
  es: {
    brand: 'DRodriguez Apps',
    nav: {
      home: 'Inicio',
      apps: 'Apps',
      approach: 'Sistema',
      process: 'Proceso',
      contact: 'Contacto',
    },
    locale: {
      en: 'Ingles',
      es: 'Espanol',
    },
    actions: {
      browseApps: 'Ver apps',
      openCatalog: 'Abrir catalogo de Google Play',
      email: 'Empezar una conversacion',
      linkedin: 'Perfil de LinkedIn',
      openProject: 'Abrir proyecto',
      openStore: 'Ver en Google Play',
      backToApps: 'Volver a las apps',
      policy: 'Politica de privacidad',
      terms: 'Terminos y condiciones',
    },
    labels: {
      overview: 'Resumen',
      highlights: 'Puntos clave',
      legal: 'Legal',
      related: 'Mas del portfolio',
      allApps: 'Todas las apps',
    },
    home: {
      eyebrow:
        'Apps Android, paginas de lanzamiento y presentacion de producto lista para clientes',
      title: 'Un portfolio mobile pensado para vender el producto, no solo para listar pantallas.',
      lead: 'Este sitio en Vue convierte cada app en una ruta escalable con copia bilingue, secciones reutilizables y paginas legales dedicadas para cumplimiento en tienda y confianza del cliente.',
      featuredTitle: 'El portfolio.',
      catalogTitle: 'Catalogo actual',
      catalogLead:
        'Productividad, finanzas, educacion y conceptos party pensados para flujos de uso claros y practicos.',
      approachTitle: 'Como trabajo',
      approachLead:
        'Los componentes reutilizables, el renderizado estatico y las rutas guiadas por contenido mantienen el portfolio rapido y facil de ampliar.',
      contactTitle: 'Necesitas un desarrollador mobile?',
      contactLead:
        'Construyo productos Android hoy y los preparo para iOS, paginas de marketing y contenido de soporte listo para publicar.',
    },
    app: {
      factsLead: 'Android esta publicado hoy. El soporte para iOS esta previsto a continuacion.',
      legalLead:
        'Cada proyecto puede publicar rutas de politica y terminos sin duplicar layout ni estructura de contenido.',
      relatedLead: 'Explora mas lanzamientos del mismo portfolio.',
    },
    legal: {
      intro: 'Este documento aplica a',
      back: 'Volver al proyecto',
    },
    footer: {
      navigate: 'Navega',
      connect: 'Conecta',
      legalHint: 'Cada pagina de proyecto incluye rutas propias de privacidad y terminos.',
    },
    notFound: {
      title: 'Pagina no encontrada',
      lead: 'La ruta solicitada no esta disponible. Usa la portada para explorar el portfolio.',
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
