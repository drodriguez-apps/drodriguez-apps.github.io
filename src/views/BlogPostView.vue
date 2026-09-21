<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { blogPosts } from '@/content/blog'
import { appProjects } from '@/content/apps'
import { pickLocalized, siteConfig } from '@/content/site'
import { usePageMeta } from '@/composables/usePageMeta'
import type { SiteLocale } from '@/types/content'

const props = defineProps<{
  slug: string
}>()

const { locale, t } = useI18n()
const router = useRouter()
const currentLocale = computed(() => locale.value as SiteLocale)

const post = computed(() => blogPosts.find((p) => p.slug === props.slug))

const relatedApps = computed(() => {
  if (!post.value) return []
  return appProjects.filter((app) => post.value!.relatedApps.includes(app.slug))
})

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString(currentLocale.value === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

usePageMeta({
  title: computed(
    () => post.value?.title && pickLocalized(currentLocale.value, post.value.title),
  ) as unknown as string,
  description: computed(
    () => post.value?.summary && pickLocalized(currentLocale.value, post.value.summary),
  ) as unknown as string,
  path: computed(() => `/blog/${props.slug}`),
  type: 'article',
  schema: computed(() =>
    post.value
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: pickLocalized(currentLocale.value, post.value.title),
          description: pickLocalized(currentLocale.value, post.value.summary),
          datePublished: post.value.date,
          dateModified: post.value.date,
          url: `${siteConfig.baseUrl}/blog/${post.value.slug}`,
          inLanguage: ['en', 'es'],
          author: {
            '@type': 'Organization',
            '@id': `${siteConfig.baseUrl}/#organization`,
            name: siteConfig.brandName,
          },
          publisher: {
            '@type': 'Organization',
            '@id': `${siteConfig.baseUrl}/#organization`,
            name: siteConfig.brandName,
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.baseUrl}/images/axislabs-logo.png`,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteConfig.baseUrl}/blog/${post.value.slug}`,
          },
          keywords: post.value.tags.join(', '),
        }
      : null,
  ),
})

interface TextSegment {
  kind: 'text' | 'link'
  value: string
  href?: string
  isInternal?: boolean
}

function parseParagraph(text: string): TextSegment[] {
  const segments: TextSegment[] = []
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s<>)"]+)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ kind: 'text', value: text.slice(lastIndex, match.index) })
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      const label = match[1]
      let href = match[2].trim()
      let isInternal = href.startsWith('/')

      if (href.startsWith(siteConfig.baseUrl)) {
        href = href.slice(siteConfig.baseUrl.length) || '/'
        isInternal = true
      }

      segments.push({
        kind: 'link',
        value: label,
        href,
        isInternal,
      })
    } else if (match[3] !== undefined) {
      let url = match[3]
      let trailing = ''
      const trailingMatch = url.match(/[.,;:!?]+$/)
      if (trailingMatch) {
        trailing = trailingMatch[0]
        url = url.slice(0, -trailing.length)
      }

      let href = url
      let isInternal = false
      if (href.startsWith(siteConfig.baseUrl)) {
        href = href.slice(siteConfig.baseUrl.length) || '/'
        isInternal = true
      }

      segments.push({
        kind: 'link',
        value: url,
        href,
        isInternal,
      })

      if (trailing) {
        segments.push({ kind: 'text', value: trailing })
      }
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ kind: 'text', value: text.slice(lastIndex) })
  }

  return segments.length > 0 ? segments : [{ kind: 'text', value: text }]
}

if (!post.value) {
  router.replace({ name: 'not-found' })
}
</script>

<template>
  <div v-if="post" class="blog-post">
    <article class="blog-post__article">
      <header class="blog-post__header grid-background">
        <div class="container blog-post__header-inner">
          <RouterLink class="blog-post__back" to="/blog"> ← {{ t('blog.backToBlog') }} </RouterLink>
          <div class="blog-post__meta">
            <time :datetime="post.date"
              >{{ t('blog.publishedOn') }} {{ formatDate(post.date) }}</time
            >
            <span class="blog-post__dot">·</span>
            <span>{{ post.readingTime }} {{ t('blog.minuteRead') }}</span>
          </div>
          <h1 class="blog-post__title">
            {{ pickLocalized(currentLocale, post.title) }}
          </h1>
          <p class="blog-post__lead">
            {{ pickLocalized(currentLocale, post.summary) }}
          </p>
          <div class="blog-post__tags">
            <span v-for="tag in post.tags" :key="tag" class="pill">
              {{ tag }}
            </span>
          </div>
        </div>
      </header>

      <div class="section section--light">
        <div class="container blog-post__body">
          <section v-for="(section, index) in post.content" :key="index" class="blog-post__section">
            <h2>{{ pickLocalized(currentLocale, section.heading) }}</h2>
            <div class="copy-stack">
              <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex">
                <template
                  v-for="(segment, sIndex) in parseParagraph(
                    pickLocalized(currentLocale, paragraph),
                  )"
                  :key="sIndex"
                >
                  <RouterLink
                    v-if="segment.kind === 'link' && segment.isInternal"
                    :to="segment.href!"
                    class="blog-post__link"
                  >
                    {{ segment.value }}
                  </RouterLink>
                  <a
                    v-else-if="segment.kind === 'link'"
                    :href="segment.href"
                    class="blog-post__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ segment.value }}
                  </a>
                  <template v-else>{{ segment.value }}</template>
                </template>
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>

    <aside v-if="relatedApps.length > 0" class="section section--dark blog-related">
      <div class="container">
        <h2 class="blog-related__title">{{ t('blog.relatedApps') }}</h2>
        <div class="blog-related__grid">
          <RouterLink
            v-for="app in relatedApps"
            :key="app.slug"
            :to="`/${app.slug}`"
            class="blog-related__app"
          >
            <img
              :src="app.iconUrl"
              :alt="app.name"
              class="blog-related__icon"
              width="56"
              height="56"
              loading="lazy"
            />
            <div class="blog-related__info">
              <span class="blog-related__name">{{ app.name }}</span>
              <span class="blog-related__category">{{
                pickLocalized(currentLocale, app.category)
              }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.blog-post__header {
  padding: clamp(4rem, 10vw, 7rem) 0 clamp(3rem, 6vw, 5rem);
}

.blog-post__header-inner {
  display: grid;
  gap: 1rem;
  max-width: 44rem;
}

.blog-post__back {
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--color-text-muted);
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.blog-post__back:hover,
.blog-post__back:focus-visible {
  color: var(--color-text);
}

.blog-post__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.blog-post__dot {
  font-weight: 700;
}

.blog-post__title {
  font-size: clamp(2.4rem, 7vw, 5rem);
}

.blog-post__lead {
  margin: 0;
  max-width: 38rem;
  color: var(--color-text-muted);
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.6;
}

.blog-post__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.blog-post__body {
  display: grid;
  gap: clamp(2.5rem, 5vw, 3.5rem);
  max-width: 68ch;
}

.blog-post__section h2 {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin-bottom: 1rem;
}

.blog-post__section p {
  color: var(--color-text-muted);
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.75;
}

.blog-post__section a,
.blog-post__link {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 600;
  transition: opacity 200ms ease;

  &:hover,
  &:focus-visible {
    opacity: 0.8;
  }
}

.blog-related {
  border-top: 1px solid var(--color-border-dark);
}

.blog-related__title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
}

.blog-related__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.blog-related__app {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.06);
  transition: var(--transition-surface);
}

.blog-related__app:hover,
.blog-related__app:focus-visible {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-strong);
}

.blog-related__icon {
  border-radius: var(--radius-md);
}

.blog-related__info {
  display: grid;
  gap: 0.2rem;
}

.blog-related__name {
  font-weight: 700;
  font-size: 1rem;
}

.blog-related__category {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.6);
}
</style>
