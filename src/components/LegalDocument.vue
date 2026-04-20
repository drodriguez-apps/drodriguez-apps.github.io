<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { pickLocalized } from '@/content/site'
import type { LegalDocument as LegalDocumentType, SiteLocale } from '@/types/content'

defineProps<{
  document: LegalDocumentType
}>()

const { locale } = useI18n()
const currentLocale = computed(() => locale.value as SiteLocale)
</script>

<template>
  <article class="legal-document">
    <div class="legal-document__intro">
      <h2>{{ pickLocalized(currentLocale, document.title) }}</h2>
      <p>{{ pickLocalized(currentLocale, document.summary) }}</p>
    </div>

    <section
      v-for="section in document.sections"
      :key="pickLocalized(currentLocale, section.title)"
    >
      <h3>{{ pickLocalized(currentLocale, section.title) }}</h3>
      <div class="copy-stack">
        <p v-for="paragraph in section.paragraphs" :key="pickLocalized(currentLocale, paragraph)">
          {{ pickLocalized(currentLocale, paragraph) }}
        </p>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
.legal-document {
  display: grid;
  gap: 1.8rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  background: #ffffff;
  padding: 1.75rem;
  box-shadow: var(--shadow-card);
}

.legal-document h2,
.legal-document h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 0.9;
}

.legal-document h2 {
  font-size: clamp(2.4rem, 5vw, 4rem);
}

.legal-document h3 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
}

.legal-document__intro {
  display: grid;
  gap: 0.75rem;
}

.legal-document__intro p,
.legal-document section p {
  margin: 0;
  color: var(--color-text-muted);
}

.legal-document section {
  display: grid;
  gap: 0.75rem;
  padding-top: 1.35rem;
  border-top: 1px solid var(--color-border-light);
}
</style>
