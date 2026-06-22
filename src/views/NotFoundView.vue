<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { siteConfig } from '@/content/site'
import { usePageMeta } from '@/composables/usePageMeta'

const { t } = useI18n()

usePageMeta({
  title: computed(() => t('notFound.title')),
  description: computed(() => t('notFound.lead')),
  path: '/404',
  image: `${siteConfig.baseUrl}/favicon.ico`,
})
</script>

<template>
  <section class="not-found-view grid-background">
    <article class="not-found-view__card">
      <p class="eyebrow">
        <span class="eyebrow__dot" />
        404
      </p>
      <h1>{{ t('notFound.title') }}</h1>
      <p>{{ t('notFound.lead') }}</p>
      <RouterLink class="button-dark" to="/">{{ t('notFound.cta') }}</RouterLink>
    </article>
  </section>
</template>

<style scoped lang="scss">
.not-found-view {
  display: grid;
  min-height: 70vh;
  place-items: center;
  padding: 3rem 1rem 4rem;
}

.not-found-view__card {
  display: grid;
  gap: 1rem;
  max-width: 680px;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.96);
  padding: 2rem;
  box-shadow: var(--shadow-strong);
}

.not-found-view__card h1 {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 0.9;
}

.not-found-view__card p {
  margin: 0;
  color: var(--color-text-muted);
}
</style>
