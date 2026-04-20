import { appProjects } from '@/content/apps'

export function getProjectBySlug(slug: string) {
  return appProjects.find((project) => project.slug === slug) ?? null
}

export function getRelatedProjects(slug: string) {
  return appProjects.filter((project) => project.slug !== slug).slice(0, 3)
}
