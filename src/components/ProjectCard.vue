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

const localizedSummary = computed(() =>
  pickLocalized(currentLocale.value, props.project.previewSummary ?? props.project.summary),
)
const localizedCategory = computed(() => pickLocalized(currentLocale.value, props.project.category))

const cardStyle = computed(() => ({
  '--project-accent': props.project.palette.accent,
  '--project-soft': props.project.palette.soft,
}))
</script>

<template>
  <RouterLink class="project-card" :style="cardStyle" :to="`/${project.slug}`">
    <div class="project-card__visual">
      <div class="project-card__chrome">
        <span class="pill">{{ localizedCategory }}</span>
      </div>

      <img
        class="project-card__feature"
        :src="project.featureUrl"
        :alt="pickLocalized(currentLocale, project.featureAlt)"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div class="project-card__body">
      <div class="project-card__brand">
        <div class="project-card__icon-shell">
          <img :src="project.iconUrl" :alt="`${project.name} icon`" loading="lazy" decoding="async" />
        </div>

        <div>
          <h3>{{ project.name }}</h3>
          <p>{{ localizedSummary }}</p>
        </div>
      </div>

      <span class="project-card__cta">{{ t('actions.openProject') }}</span>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.project-card {
  display: grid;
  grid-template-rows: auto 1fr;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: var(--transition-surface);
}

.project-card:hover,
.project-card:focus-visible {
  transform: translateY(-8px);
  border-color: rgba(23, 30, 25, 0.18);
  box-shadow: var(--shadow-strong);
}

.project-card__visual {
  position: relative;
  min-height: 240px;
  background: var(--project-soft);
}

.project-card__feature {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__chrome {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
}

.project-card__icon-shell {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1.2rem;
  background: #ffffff;
  box-shadow: var(--shadow-card);
  padding: 0.4rem;
  flex-shrink: 0;
}

.project-card__icon-shell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.85rem;
}

.project-card__body {
  display: grid;
  align-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
}

.project-card__brand {
  display: grid;
  gap: 1rem;
}

.project-card__brand {
  grid-template-columns: auto 1fr;
  align-items: center;
}

.project-card__body h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: clamp(1.8rem, 3vw, 2.35rem);
  line-height: 0.9;
}

.project-card__body p {
  margin: 0.65rem 0 0;
  color: var(--color-text-muted);
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.project-card__cta {
  color: var(--color-text);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  justify-self: end;
}

@media (max-width: 520px) {
  .project-card__brand {
    grid-template-columns: 1fr;
  }
}
</style>
