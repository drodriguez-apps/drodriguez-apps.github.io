<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ProjectCard from '@/components/ProjectCard.vue'
import { pickLocalized, siteConfig } from '@/content/site'
import { getProjectBySlug, getRelatedProjects } from '@/composables/useCatalog'
import { usePageMeta } from '@/composables/usePageMeta'
import type { SiteLocale } from '@/types/content'

const props = defineProps<{
  slug: string
}>()

const { locale, t } = useI18n()

const currentLocale = computed(() => locale.value as SiteLocale)
const project = computed(() => getProjectBySlug(props.slug))
const relatedProjects = computed(() => getRelatedProjects(props.slug))
const category = computed(() =>
  project.value ? pickLocalized(currentLocale.value, project.value.category) : '',
)
const summary = computed(() =>
  project.value ? pickLocalized(currentLocale.value, project.value.summary) : '',
)
const heroStyle = computed(() => {
  if (!project.value) {
    return {}
  }

  return {
    '--project-accent': project.value.palette.accent,
    '--project-soft': project.value.palette.soft,
  }
})

usePageMeta({
  title: computed(() => project.value?.storeTitle ?? siteConfig.brandName),
  description: summary,
  path: computed(() => `/${props.slug}`),
  image: computed(() => project.value?.featureUrl ?? `${siteConfig.baseUrl}/favicon.svg`),
  type: 'article',
  schema: computed(() => {
    if (!project.value) {
      return null
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: project.value.storeTitle,
      applicationCategory: category.value,
      operatingSystem: 'Android',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
      url: `${siteConfig.baseUrl}/${project.value.slug}`,
      downloadUrl: project.value.storeUrl,
      image: project.value.featureUrl,
      description: summary.value,
    }
  }),
})
</script>

<template>
  <div v-if="project" class="project-view">
    <section class="project-hero" :style="heroStyle">
      <div class="container project-hero__layout">
        <div class="project-hero__media">
          <img
            class="project-hero__feature"
            :src="project.featureUrl"
            :alt="pickLocalized(currentLocale, project.featureAlt)"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />

          <div class="project-hero__topline">
            <span class="pill">{{ category }}</span>
          </div>
        </div>

        <div class="project-hero__body">
          <div class="project-hero__identity">
            <div class="project-hero__icon-shell">
              <img :src="project.iconUrl" :alt="`${project.name} icon`" />
            </div>

            <div class="project-hero__title-block">
              <h1>{{ project.storeTitle }}</h1>
              <p class="project-view__lead">{{ summary }}</p>
            </div>
          </div>

          <div class="button-row project-hero__actions">
            <a class="button-dark" :href="project.storeUrl" target="_blank" rel="noreferrer">
              {{ t('actions.openStore') }}
            </a>
            <RouterLink class="button-secondary" :to="`/${project.slug}/policy`">
              {{ t('actions.policy') }}
            </RouterLink>
            <RouterLink class="button-secondary" :to="`/${project.slug}/terms-and-conditions`">
              {{ t('actions.terms') }}
            </RouterLink>
            <RouterLink
              v-if="project.slug === 'tandapp'"
              class="button-secondary"
              :to="`/${project.slug}/eula`"
            >
              {{ t('actions.eula') }}
            </RouterLink>
          </div>

          <div class="project-hero__copy-block">
            <p class="eyebrow">
              <span class="eyebrow__dot" />
              {{ t('labels.overview') }}
            </p>

            <div class="copy-stack project-hero__copy">
              <p v-for="paragraph in project.description" :key="paragraph.en">
                {{ pickLocalized(currentLocale, paragraph) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="project-band project-band--dark">
      <div class="container project-section">
        <div class="project-section__heading">
          <div>
            <p class="eyebrow">
              <span class="eyebrow__dot" />
              {{ t('labels.highlights') }}
            </p>
            <h2>{{ project.name }}</h2>
          </div>
          <p class="section-copy">{{ t('app.legalLead') }}</p>
        </div>

        <div class="project-highlights">
          <article
            v-for="highlight in project.highlights"
            :key="highlight.title.en"
            class="project-highlight"
          >
            <h3>{{ pickLocalized(currentLocale, highlight.title) }}</h3>
            <p>{{ pickLocalized(currentLocale, highlight.description) }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="project-band project-band--light">
      <div class="container project-section">
        <div class="project-section__heading">
          <div>
            <p class="eyebrow">
              <span class="eyebrow__dot" />
              {{ t('labels.related') }}
            </p>
            <h2>{{ t('labels.allApps') }}</h2>
          </div>
          <p class="section-copy">{{ t('app.relatedLead') }}</p>
        </div>

        <div class="project-related">
          <ProjectCard v-for="related in relatedProjects" :key="related.slug" :project="related" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.project-view {
  display: grid;
  gap: 0;
  padding-bottom: 4rem;
}

.project-hero {
  padding: clamp(2rem, 5vw, 5rem) 0 clamp(2.5rem, 6vw, 4rem);
}

.project-hero__layout {
  display: grid;
  gap: 1.25rem;
}

.project-hero__media {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  background: var(--project-soft);
  box-shadow: var(--shadow-strong);
}

.project-hero__feature {
  width: 100%;
  aspect-ratio: 16 / 7;
  object-fit: cover;
  background: var(--project-soft);
}

.project-hero__topline {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
}

.project-hero__body {
  position: relative;
  width: min(calc(100% - 2rem), 74rem);
  display: grid;
  gap: 1.5rem;
  margin: clamp(-3.5rem, -6vw, -2rem) auto 0;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  background: #ffffff;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: var(--shadow-card);
}

.project-hero__identity {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.15rem;
  align-items: center;
}

.project-hero__icon-shell {
  width: 5rem;
  height: 5rem;
  border-radius: 1.35rem;
  background: #ffffff;
  box-shadow: var(--shadow-card);
  padding: 0.35rem;
}

.project-hero__icon-shell img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
}

.project-hero__title-block {
  display: grid;
  gap: 0.75rem;
}

.project-hero__title-block h1,
.project-section__heading h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 0.9;
}

.project-hero__title-block h1 {
  font-size: clamp(3.6rem, 9vw, 6.8rem);
}

.project-section__heading h2 {
  font-size: clamp(2.6rem, 5vw, 4.5rem);
}

.project-view__lead {
  margin: 0;
  max-width: 58ch;
  color: var(--color-text-muted);
  font-size: clamp(1.04rem, 2vw, 1.22rem);
}

.project-hero__copy-block {
  display: grid;
  gap: 1rem;
}

.project-hero__copy {
  max-width: 72ch;
}

.project-band {
  padding: clamp(3rem, 6vw, 4.5rem) 0;
}

.project-band--light {
  border-top: 1px solid var(--color-border-light);
  background: var(--color-bg);
}

.project-band--dark {
  border-top: 1px solid var(--color-border-dark);
  background: var(--color-bg-dark);
  color: var(--color-text-inverse);
}

.project-section {
  display: grid;
  gap: 1.25rem;
}

.project-section__heading {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: end;
}

.project-highlights,
.project-related {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-highlight {
  display: grid;
  gap: 0.85rem;
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-lg);
  background: var(--color-bg-dark-strong);
  padding: 1.3rem;
  box-shadow: var(--shadow-card);
}

.project-highlight h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 2rem;
  line-height: 0.9;
}

.project-highlight p {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
}

@media (max-width: 980px) {
  .project-section__heading,
  .project-highlights,
  .project-related {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    display: grid;
  }
}

@media (max-width: 680px) {
  .project-hero__layout {
    gap: 1rem;
  }

  .project-hero__media {
    order: 2;
  }

  .project-hero__body {
    order: 1;
    width: 100%;
    margin: 0;
  }

  .project-hero__identity,
  .project-section__heading,
  .project-highlights,
  .project-related {
    grid-template-columns: 1fr;
    display: grid;
  }

  .project-hero__actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .project-hero__actions > * {
    width: 100%;
  }
}
</style>
