<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import LegalDocument from '@/components/LegalDocument.vue'
import ProjectSummaryCard from '@/components/ProjectSummaryCard.vue'
import { eulaDocument, privacyDocument, termsDocument } from '@/content/legal'
import { pickLocalized, siteConfig } from '@/content/site'
import { getProjectBySlug } from '@/composables/useCatalog'
import { usePageMeta } from '@/composables/usePageMeta'
import type { SiteLocale } from '@/types/content'

const props = defineProps<{
  slug: string
  documentType: 'privacy' | 'terms' | 'eula'
}>()

const { locale, t } = useI18n()

const currentLocale = computed(() => locale.value as SiteLocale)
const project = computed(() => getProjectBySlug(props.slug))
const document = computed(() => {
  if (props.documentType === 'privacy') return privacyDocument
  if (props.documentType === 'eula') return eulaDocument
  return termsDocument
})

const documentPath = computed(() => {
  if (props.documentType === 'privacy') return 'policy'
  if (props.documentType === 'eula') return 'eula'
  return 'terms-and-conditions'
})

usePageMeta({
  title: computed(() => {
    if (!project.value) {
      return siteConfig.brandName
    }

    return `${pickLocalized(currentLocale.value, document.value.title)} | ${project.value.storeTitle}`
  }),
  description: computed(() => pickLocalized(currentLocale.value, document.value.summary)),
  path: computed(() => `/${props.slug}/${documentPath.value}`),
  image: computed(() => project.value?.featureUrl ?? `${siteConfig.baseUrl}/favicon.svg`),
  type: 'article',
})
</script>

<template>
  <section v-if="project" class="legal-view">
    <div class="container legal-view__header">
      <div>
        <p class="eyebrow">
          <span class="eyebrow__dot" />
          {{ t('labels.legal') }}
        </p>
        <h1>{{ pickLocalized(currentLocale, document.title) }}</h1>
        <p class="section-copy">
          {{ t('legal.intro') }} {{ project.name }}.
          {{ pickLocalized(currentLocale, document.summary) }}
        </p>
      </div>

      <RouterLink class="button-secondary" :to="`/${project.slug}`">
        {{ t('legal.back') }}
      </RouterLink>
    </div>

    <div class="container legal-view__layout">
      <ProjectSummaryCard :project="project" />
      <LegalDocument :document="document" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.legal-view {
  display: grid;
  gap: 1.6rem;
  padding: clamp(2rem, 5vw, 4rem) 0 4rem;
}

.legal-view__header,
.legal-view__layout {
  display: grid;
  gap: 1rem;
}

.legal-view__header {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
}

.legal-view__header h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 0.9;
}

.legal-view__layout {
  grid-template-columns: minmax(320px, 420px) minmax(0, 1fr);
  align-items: start;

  :deep(.project-summary) {
    position: sticky;
    top: calc(var(--header-height) + 1.6rem);
  }
}

@media (max-width: 980px) {
  .legal-view__header,
  .legal-view__layout {
    grid-template-columns: 1fr;

    :deep(.project-summary) {
      position: static;
    }
  }
}
</style>
