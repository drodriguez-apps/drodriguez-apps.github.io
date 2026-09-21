import type { RouteRecordRaw } from 'vue-router'

import { appProjects } from '@/content/apps'
import { blogPosts } from '@/content/blog'

const blogRoutes: RouteRecordRaw[] = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  name: `blog-${post.slug}`,
  component: () => import('@/views/BlogPostView.vue'),
  props: {
    slug: post.slug,
  },
}))

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
  {
    path: `/${project.slug}/eula`,
    name: `${project.slug}-eula`,
    component: () => import('@/views/LegalView.vue'),
    props: {
      slug: project.slug,
      documentType: 'eula',
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
  {
    path: '/privacy',
    alias: '/policy',
    name: 'privacy',
    component: () => import('@/views/LegalView.vue'),
    props: {
      documentType: 'privacy',
    },
  },
  {
    path: '/terms',
    alias: '/terms-and-conditions',
    name: 'terms',
    component: () => import('@/views/LegalView.vue'),
    props: {
      documentType: 'terms',
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue'),
  },
  ...blogRoutes,
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('@/views/BlogPostView.vue'),
    props: true,
  },
  ...appRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]
