<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { pickLocalized } from '@/content/site'
import type { AppProject, SiteLocale } from '@/types/content'

const props = defineProps<{
  project: AppProject
}>()

const { locale, t } = useI18n()

const currentLocale = computed(() => locale.value as SiteLocale)
const category = computed(() => pickLocalized(currentLocale.value, props.project.category))
const summary = computed(() => pickLocalized(currentLocale.value, props.project.summary))

const cardStyle = computed(() => ({
  '--project-accent': props.project.palette.accent,
  '--project-soft': props.project.palette.soft,
}))
</script>

<template>
  <aside class="project-summary" :style="cardStyle">
    <div class="project-summary__media">
      <img
        class="project-summary__feature"
        :src="project.featureUrl"
        :alt="pickLocalized(currentLocale, project.featureAlt)"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />

      <div class="project-summary__topline">
        <span class="pill">{{ category }}</span>
      </div>
    </div>

    <div class="project-summary__body">
      <div class="project-summary__app">
        <img class="project-summary__icon" :src="project.iconUrl" :alt="`${project.name} icon`" />
        <div>
          <h2>{{ project.name }}</h2>
          <p>{{ summary }}</p>
        </div>
      </div>

      <div class="project-summary__actions">
        <div class="project-summary__store-links">
          <a class="button-dark" :href="project.storeUrl" target="_blank" rel="noreferrer">
            {{ t('actions.openStore') }}
          </a>
          <a
            v-if="project.iosStoreUrl"
            class="button-dark"
            :href="project.iosStoreUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ t('actions.openAppStore') }}
          </a>
        </div>
        <div class="project-summary__legal-links">
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
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.project-summary {
  overflow: hidden;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  background: #ffffff;
  box-shadow: var(--shadow-strong);
}

.project-summary__media {
  position: relative;
  overflow: hidden;
}

.project-summary__feature {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
  background: var(--project-soft);
}

.project-summary__topline {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
}

.project-summary__body {
  display: grid;
  gap: 1.25rem;
  padding: 1.4rem;
}

.project-summary__app {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
}

.project-summary__icon {
  width: 4.75rem;
  height: 4.75rem;
  border-radius: 1.2rem;
  object-fit: cover;
  box-shadow: var(--shadow-card);
}

.project-summary__app h2,
.project-summary__app p {
  margin: 0;
}

.project-summary__app h2 {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 0.9;
}

.project-summary__app p {
  margin-top: 0.5rem;
  color: var(--color-text-muted);
}

.project-summary__actions {
  display: grid;
  gap: 0.85rem;
}

.project-summary__store-links {
  display: grid;
  gap: 0.85rem;
}

.project-summary__actions :deep(.button-dark) {
  width: 100%;
}

@media (max-width: 600px) {
  .project-summary__store-links {
    grid-template-columns: 1fr;
  }
}

.project-summary__legal-links {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.7rem;
}

@media (max-width: 600px) {
  .project-summary__app {
    grid-template-columns: 1fr;
  }
}
</style>
