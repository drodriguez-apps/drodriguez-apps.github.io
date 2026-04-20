<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { SiteLocale } from '@/types/content'

const { locale, t } = useI18n()

const locales: SiteLocale[] = ['en', 'es']

function setLocale(nextLocale: SiteLocale) {
  locale.value = nextLocale
}
</script>

<template>
  <div class="language-toggle" role="group" aria-label="Language selector">
    <button
      v-for="language in locales"
      :key="language"
      class="language-toggle__button"
      :class="{ 'language-toggle__button--active': locale === language }"
      type="button"
      @click="setLocale(language)"
    >
      {{ t(`locale.${language}`) }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.language-toggle {
  display: inline-flex;
  gap: 0.2rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.92);
  padding: 0.2rem;
}

.language-toggle__button {
  border: 0;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--color-text-soft);
  padding: 0.5rem 0.72rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: var(--transition-surface);
}

.language-toggle__button--active {
  background: var(--color-accent);
  color: var(--color-text);
}
</style>
