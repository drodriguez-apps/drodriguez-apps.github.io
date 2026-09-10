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

interface TextSegment {
  kind: 'text' | 'link'
  value: string
}

function linkify(text: string): TextSegment[] {
  const segments: TextSegment[] = []
  const urlPattern = /(https?:\/\/[^\s]+)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = urlPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ kind: 'text', value: text.slice(lastIndex, match.index) })
    }

    let url = match[0]
    let trailing = ''
    const trailingMatch = url.match(/[.,;:!?)\]]+$/)
    if (trailingMatch) {
      trailing = trailingMatch[0]
      url = url.slice(0, -trailing.length)
    }

    if (url) {
      segments.push({ kind: 'link', value: url })
    }
    if (trailing) {
      segments.push({ kind: 'text', value: trailing })
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ kind: 'text', value: text.slice(lastIndex) })
  }

  return segments.length > 0 ? segments : [{ kind: 'text', value: text }]
}
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
          <template
            v-for="(segment, index) in linkify(pickLocalized(currentLocale, paragraph))"
            :key="`${pickLocalized(currentLocale, paragraph).slice(0, 24)}-${index}`"
          >
            <a
              v-if="segment.kind === 'link'"
              :href="segment.value"
              target="_blank"
              rel="noreferrer"
              >{{ segment.value }}</a
            >
            <template v-else>{{ segment.value }}</template>
          </template>
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

.legal-document section a {
  color: var(--color-accent);
  word-break: break-all;
}

.legal-document section {
  display: grid;
  gap: 0.75rem;
  padding-top: 1.35rem;
  border-top: 1px solid var(--color-border-light);
}
</style>
