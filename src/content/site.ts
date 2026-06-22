import type { AppProject, LocalizedText, SiteLocale } from '@/types/content'

const copy = (en: string, es: string): LocalizedText => ({ en, es })

export const siteConfig = {
  brandName: 'Axis Labs',
  email: 'drodriguez.apps@gmail.com',
  baseUrl: 'https://drodriguez-apps.github.io',
  location: copy('Building mobile products from Spain.', 'Creando productos móviles desde España.'),
} as const

export const landingCopy = {
  heroBadge: copy('Mobile Studio', 'Estudio Mobile'),
  heroTitleLead: copy('AXIS', 'AXIS'),
  heroTitleAccent: copy('LABS', 'LABS'),
  heroLead: copy(
    'We design, build, and publish mobile apps that solve real problems across productivity, finance, gaming, and education.',
    'Diseñamos, construimos y publicamos apps móviles que resuelven problemas reales en productividad, finanzas, juegos y educación.',
  ),
  finalEyebrow: copy('Get in touch', 'Contáctanos'),
  finalTitle: copy("LET'S WORK TOGETHER", 'TRABAJEMOS JUNTOS'),
  finalLead: copy(
    "Have an app idea? Let's discuss how we can bring it to life. Reach out by email and let's build something great.",
    '¿Tienes una idea para una app? Hablemos sobre cómo hacerla realidad. Escríbenos por correo y construyamos algo grande.',
  ),
} as const

export function pickLocalized(locale: SiteLocale, value: LocalizedText): string {
  return value[locale]
}

export function getFeaturedProjects(projects: AppProject[]): AppProject[] {
  return projects.filter((project) => project.featured)
}
