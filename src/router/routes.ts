import type { RouteRecordRaw } from 'vue-router'

import { appProjects } from '@/content/apps'

const appRoutes: RouteRecordRaw[] = appProjects.flatMap((project) => [
  {
    path: `/${project.slug}`,
    name: project.slug,
    component: () => import('@/views/AppView.vue'),
    props: {
      slug: project.slug,
    },
    meta: {
      appSlug: project.slug,
    },
  },
  {
    path: `/${project.slug}/policy`,
    name: `${project.slug}-policy`,
    component: () => import('@/views/LegalView.vue'),
    props: {
      slug: project.slug,
      documentType: 'privacy',
    },
    meta: {
      appSlug: project.slug,
    },
  },
  {
    path: `/${project.slug}/terms-and-conditions`,
    name: `${project.slug}-terms`,
    component: () => import('@/views/LegalView.vue'),
    props: {
      slug: project.slug,
      documentType: 'terms',
    },
    meta: {
      appSlug: project.slug,
    },
  },
])

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  ...appRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]
