<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ProjectCard from '@/components/ProjectCard.vue'
import { appProjects } from '@/content/apps'
import { blogPosts } from '@/content/blog'
import { landingCopy, pickLocalized, siteConfig } from '@/content/site'
import { usePageMeta } from '@/composables/usePageMeta'
import type { SiteLocale } from '@/types/content'

const { locale, t } = useI18n()

const currentLocale = computed(() => locale.value as SiteLocale)
const marqueeProjects = computed(() => [
  ...appProjects.map((project) => project.name),
  ...appProjects.map((project) => project.name),
])
const recentPosts = computed(() =>
  [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3),
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
  title: computed(() => siteConfig.brandName),
  description: computed(() => pickLocalized(currentLocale.value, landingCopy.heroLead)),
  path: '/',
  image: computed(() => appProjects[0]?.featureUrl ?? `${siteConfig.baseUrl}/favicon.ico`),
  schema: computed(() => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.baseUrl}/#organization`,
        name: siteConfig.brandName,
        url: siteConfig.baseUrl,
        logo: `${siteConfig.baseUrl}/images/axislabs-logo.png`,
        description: pickLocalized(currentLocale.value, landingCopy.heroLead),
        email: siteConfig.email,
        sameAs: ['https://play.google.com/store/apps/developer?id=drodriguez'],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.baseUrl}/#website`,
        url: siteConfig.baseUrl,
        name: siteConfig.brandName,
        description: pickLocalized(currentLocale.value, landingCopy.heroLead),
        publisher: {
          '@id': `${siteConfig.baseUrl}/#organization`,
        },
        inLanguage: ['en', 'es'],
      },
      {
        '@type': 'Blog',
        '@id': `${siteConfig.baseUrl}/#blog`,
        url: `${siteConfig.baseUrl}/blog`,
        name: `${siteConfig.brandName} Blog`,
        description: t('blog.lead'),
        publisher: {
          '@id': `${siteConfig.baseUrl}/#organization`,
        },
      },
    ],
  })),
})
</script>

<template>
  <div class="home">
    <section class="home-hero grid-background">
      <div class="container home-hero__layout">
        <div class="home-hero__copy">
          <h1 class="home-hero__title">
            <img
              class="home-hero__logo"
              src="/images/axislabs-logo.png"
              :alt="siteConfig.brandName"
              width="400"
              height="80"
            />
          </h1>

          <p class="home-hero__lead">
            {{ pickLocalized(currentLocale, landingCopy.heroLead) }}
          </p>

          <div class="button-row home-hero__actions">
            <RouterLink class="button-dark" :to="{ path: '/', hash: '#apps' }">
              {{ t('actions.browseApps') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="home-proof">
      <div class="home-proof__marquee" aria-hidden="true">
        <div class="home-proof__track">
          <span v-for="(name, index) in marqueeProjects" :key="`${name}-${index}`">{{ name }}</span>
        </div>
      </div>
    </section>

    <section id="apps" class="section section--light home-apps">
      <div class="container">
        <div class="home-section-heading">
          <p class="eyebrow">
            <span class="eyebrow__dot" />
            {{ t('nav.apps') }}
          </p>
          <h2>{{ t('home.featuredTitle') }}</h2>
          <p class="home-section-lead">{{ t('home.featuredLead') }}</p>
        </div>

        <div class="home-apps__grid">
          <ProjectCard v-for="project in appProjects" :key="project.slug" :project="project" />
        </div>
      </div>
    </section>

    <section id="blog" class="section section--light home-blog">
      <div class="container">
        <div class="home-section-heading">
          <p class="eyebrow">
            <span class="eyebrow__dot" />
            {{ t('nav.blog') }}
          </p>
          <h2>{{ t('blog.title') }}</h2>
          <p class="home-section-lead">{{ t('blog.lead') }}</p>
        </div>

        <div class="home-blog__grid">
          <RouterLink
            v-for="post in recentPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="home-blog__card card"
          >
            <div class="home-blog__meta">
              <time :datetime="post.date">{{ formatDate(post.date) }}</time>
              <span>·</span>
              <span>{{ post.readingTime }} {{ t('blog.minuteRead') }}</span>
            </div>
            <h3 class="home-blog__card-title">
              {{ pickLocalized(currentLocale, post.title) }}
            </h3>
            <p class="home-blog__card-summary">
              {{ pickLocalized(currentLocale, post.summary) }}
            </p>
            <span class="home-blog__card-cta">{{ t('blog.readMore') }} →</span>
          </RouterLink>
        </div>

        <div class="home-blog__actions">
          <RouterLink class="button-dark" to="/blog">
            {{ t('blog.viewAll') }}
          </RouterLink>
        </div>
      </div>
    </section>

    <section id="contact" class="home-cta grid-background">
      <div class="container home-cta__inner">
        <p class="eyebrow">
          <span class="eyebrow__dot" />
          {{ pickLocalized(currentLocale, landingCopy.finalEyebrow) }}
        </p>
        <h2>{{ pickLocalized(currentLocale, landingCopy.finalTitle) }}</h2>
        <p class="home-cta__lead">{{ pickLocalized(currentLocale, landingCopy.finalLead) }}</p>

        <div class="button-row home-cta__actions">
          <a class="button-dark" :href="`mailto:${siteConfig.email}`">
            {{ t('actions.email') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home-hero {
  display: flex;
  align-items: center;
  min-height: calc(100svh - var(--header-offset, var(--header-height)));
  padding: clamp(3rem, 8vw, 6rem) 0;
}

.home-hero__layout {
  display: block;
}

.home-hero__copy {
  display: grid;
  justify-items: center;
  gap: 1.25rem;
  max-width: 44rem;
  margin: 0 auto;
  text-align: center;
}

.home-hero__title,
.home-section-heading h2,
.home-cta__inner h2 {
  font-size: clamp(3.4rem, 10vw, 7.5rem);
}

.home-hero__title {
  display: grid;
  gap: 0.3rem;
}

.home-hero__logo {
  max-width: 100%;
  height: auto;
}

.home-hero__lead,
.home-cta__lead {
  margin: 0;
  max-width: 34rem;
  color: var(--color-text-muted);
  font-size: clamp(1.02rem, 1.8vw, 1.2rem);
}

.home-hero__actions,
.home-cta__actions {
  align-items: center;
}

.home-proof {
  overflow: hidden;
  border-top: 1px solid var(--color-border-dark);
  border-bottom: 1px solid var(--color-border-dark);
  background: var(--color-bg-dark);
  color: var(--color-text-inverse);
  padding: 1rem 0;
}

.home-proof__marquee {
  overflow: hidden;
  white-space: nowrap;
}

.home-proof__track {
  display: inline-flex;
  gap: 2rem;
  min-width: max-content;
  animation: marquee 24s linear infinite;
}

.home-proof__track span {
  color: rgba(255, 255, 255, 0.62);
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 0.9;
  text-transform: uppercase;
}

.home-section-heading {
  display: grid;
  gap: 1rem;
  max-width: 46rem;
  margin-bottom: 2.5rem;
}

.home-apps__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}

.home-cta {
  border-top: 1px solid var(--color-border-light);
  background-color: var(--color-accent);
  color: var(--color-text-on-accent);
  padding: clamp(4.5rem, 9vw, 7rem) 0;
}

.home-cta__inner {
  display: grid;
  justify-items: center;
  gap: 1rem;
  text-align: center;
}

.home-cta__inner h2 {
  max-width: 9ch;
}

.home-cta__lead {
  color: rgba(255, 255, 255, 0.8);
}

.home-blog {
  border-top: 1px solid var(--color-border-light);
}

.home-blog__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.home-blog__card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: clamp(1.5rem, 3vw, 2rem);
  text-decoration: none;
  color: inherit;
  transition: var(--transition-surface);
}

.home-blog__card:hover,
.home-blog__card:focus-visible {
  transform: translateY(-3px);
  box-shadow: var(--shadow-strong);
}

.home-blog__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.home-blog__card-title {
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  line-height: 1.1;
}

.home-blog__card-summary {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
}

.home-blog__card-cta {
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--color-text);
  margin-top: 0.5rem;
}

.home-blog__actions {
  display: flex;
  justify-content: center;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 680px) {
  .home-section-lead {
    margin: 0;
    max-width: 42rem;
    color: var(--color-text-muted);
    font-size: clamp(1.02rem, 1.8vw, 1.2rem);
    line-height: 1.6;
  }

  .home-apps__grid {
    grid-template-columns: 1fr;
  }
}
</style>
