import type { AppProject, LocalizedText, SiteLocale } from '@/types/content'

const copy = (en: string, es: string): LocalizedText => ({ en, es })

export const siteConfig = {
  brandName: 'DRodriguez Apps',
  developerName: 'Daniel Rodriguez Ramirez',
  email: 'drodriguez.apps@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/daniel-rodriguez-ramirez-6373a391/',
  googlePlayDeveloperUrl:
    'https://play.google.com/store/apps/developer?id=Daniel+Rodr%C3%ADguez+Ram%C3%ADrez',
  baseUrl: 'https://drodriguez-apps.github.io',
  location: copy(
    'Based in Spain, available remotely.',
    'Con base en Espana, disponible en remoto.',
  ),
} as const

export const landingCopy = {
  heroBadge: copy(
    'Portfolio',
    'Portfolio',
  ),
  heroTitleLead: copy('MOBILE APPS', 'APPS MOBILE'),
  heroTitleAccent: copy('BY DANIEL', 'DE DANIEL'),
  heroLead: copy(
    'A compact portfolio of mobile apps across rentals, finance, learning, and party play.',
    'Un portfolio compacto de apps mobile entre alquileres, finanzas, aprendizaje y party play.',
  ),
  finalEyebrow: copy('Start a conversation', 'Empecemos una conversacion'),
  finalTitle: copy('LET\'S TALK APPS', 'HABLEMOS DE APPS'),
  finalLead: copy(
    'Use email, LinkedIn, or Google Play to jump directly into the portfolio and the person behind it.',
    'Usa email, LinkedIn o Google Play para entrar directo al portfolio y a la persona que lo construye.',
  ),
} as const

export function pickLocalized(locale: SiteLocale, value: LocalizedText): string {
  return value[locale]
}

export function getFeaturedProjects(projects: AppProject[]): AppProject[] {
  return projects.filter((project) => project.featured)
}
