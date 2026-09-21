<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { blogPosts } from '@/content/blog'
import { pickLocalized, siteConfig } from '@/content/site'
import { usePageMeta } from '@/composables/usePageMeta'
import type { SiteLocale } from '@/types/content'

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as SiteLocale)

const sortedPosts = computed(() =>
  [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString(currentLocale.value === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

usePageMeta({
  title: computed(() => `${t('blog.title')} — ${siteConfig.brandName}`),
  description: computed(() => t('blog.lead')),
  path: '/blog',
  schema: computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteConfig.baseUrl}/blog`,
    name: `${siteConfig.brandName} Blog`,
    description: t('blog.lead'),
    url: `${siteConfig.baseUrl}/blog`,
    publisher: {
      '@id': `${siteConfig.baseUrl}/#organization`,
    },
    inLanguage: ['en', 'es'],
    blogPost: sortedPosts.value.map((post) => ({
      '@type': 'BlogPosting',
      headline: pickLocalized(currentLocale.value, post.title),
      description: pickLocalized(currentLocale.value, post.summary),
      datePublished: post.date,
      url: `${siteConfig.baseUrl}/blog/${post.slug}`,
      author: {
        '@id': `${siteConfig.baseUrl}/#organization`,
      },
    })),
  })),
})
</script>

<template>
  <div class="blog">
    <section class="blog-hero grid-background">
      <div class="container blog-hero__inner">
        <p class="eyebrow">
          <span class="eyebrow__dot" />
          {{ t('blog.title') }}
        </p>
        <h1>{{ t('blog.title') }}</h1>
        <p class="blog-hero__lead">{{ t('blog.lead') }}</p>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <div class="blog-grid">
          <RouterLink
            v-for="post in sortedPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="blog-card card"
          >
            <div class="blog-card__meta">
              <time :datetime="post.date">{{ formatDate(post.date) }}</time>
              <span class="blog-card__dot">·</span>
              <span>{{ post.readingTime }} {{ t('blog.minuteRead') }}</span>
            </div>
            <h2 class="blog-card__title">
              {{ pickLocalized(currentLocale, post.title) }}
            </h2>
            <p class="blog-card__summary">
              {{ pickLocalized(currentLocale, post.summary) }}
            </p>
            <div class="blog-card__tags">
              <span v-for="tag in post.tags.slice(0, 4)" :key="tag" class="blog-card__tag">
                {{ tag }}
              </span>
            </div>
            <span class="blog-card__cta">{{ t('blog.readMore') }} →</span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.blog-hero {
  padding: clamp(4rem, 10vw, 7rem) 0 clamp(3rem, 6vw, 5rem);
}

.blog-hero__inner {
  display: grid;
  gap: 1rem;
  max-width: 44rem;
}

.blog-hero__inner h1 {
  font-size: clamp(3.4rem, 10vw, 7.5rem);
}

.blog-hero__lead {
  margin: 0;
  max-width: 38rem;
  color: var(--color-text-muted);
  font-size: clamp(1.02rem, 1.8vw, 1.2rem);
}

.blog-grid {
  display: grid;
  gap: 1.5rem;
}

.blog-card {
  display: grid;
  gap: 0.75rem;
  padding: clamp(1.5rem, 3vw, 2rem);
  transition: var(--transition-surface);
  text-decoration: none;
  color: inherit;
}

.blog-card:hover,
.blog-card:focus-visible {
  transform: translateY(-3px);
  box-shadow: var(--shadow-strong);
}

.blog-card__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.blog-card__dot {
  font-weight: 700;
}

.blog-card__title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  line-height: 1;
}

.blog-card__summary {
  margin: 0;
  max-width: 72ch;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.blog-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.blog-card__tag {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-pill);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
}

.blog-card__cta {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--color-text);
}
</style>
