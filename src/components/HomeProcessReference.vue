<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { LocalizedText, SiteLocale } from '@/types/content'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value as SiteLocale)

const copy = (en: string, es: string): LocalizedText => ({ en, es })
const title = copy('FROM IDEA TO STORE', 'DE LA IDEA A LA STORE')
const eyebrow = copy('How it works', 'Cómo funciona')
const lead = copy(
  'The website follows the same sequence used to ship the apps themselves.',
  'La web sigue la misma secuencia que se usa para publicar las propias apps.',
)
const steps = [
  {
    number: '01',
    title: copy('Shape the story', 'Define la historia'),
    description: copy(
      'Define the product angle, screenshot narrative, and who the app is for before the page is built.',
      'Define el ángulo del producto, la narrativa visual y para quién es la app antes de construir la página.',
    ),
  },
  {
    number: '02',
    title: copy('Package the proof', 'Empaqueta la prueba'),
    description: copy(
      'Add installs, summaries, visuals, and store-ready routes so the release feels complete.',
      'Añade instalaciones, resúmenes, visuales y rutas listas para store para que el lanzamiento se sienta completo.',
    ),
  },
  {
    number: '03',
    title: copy('Launch the route', 'Lanza la ruta'),
    description: copy(
      'Publish a fast static page that can be shared, indexed, and extended without rebuilding the system.',
      'Publica una página estática rápida que se puede compartir, indexar y ampliar sin rehacer el sistema.',
    ),
  },
]

function pickLocalized(localeValue: SiteLocale, value: LocalizedText): string {
  return value[localeValue]
}
</script>

<template>
  <section class="home-process-reference section section--dark grid-background--dark">
    <div class="container home-process-reference__layout">
      <div class="home-process-reference__intro">
        <p class="eyebrow">
          <span class="eyebrow__dot" />
          {{ pickLocalized(currentLocale, eyebrow) }}
        </p>
        <h2>{{ pickLocalized(currentLocale, title) }}</h2>
        <p class="section-copy">{{ pickLocalized(currentLocale, lead) }}</p>
      </div>

      <div class="home-process-reference__steps">
        <article v-for="step in steps" :key="step.number" class="home-process-reference__step">
          <span class="home-process-reference__number">{{ step.number }}</span>
          <div class="home-process-reference__content">
            <h3>{{ pickLocalized(currentLocale, step.title) }}</h3>
            <p>{{ pickLocalized(currentLocale, step.description) }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-process-reference__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(2rem, 5vw, 4rem);
}

.home-process-reference__intro {
  display: grid;
  align-content: start;
  gap: 1rem;
}

.home-process-reference__intro h2 {
  font-size: clamp(3rem, 7vw, 5.5rem);
}

.home-process-reference__steps {
  display: grid;
  gap: 1rem;
}

.home-process-reference__step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.2rem;
  align-items: start;
  padding: 1.25rem 0;
  border-top: 1px solid var(--color-border-dark);
}

.home-process-reference__number {
  color: rgba(2, 34, 76, 0.2);
  font-family: var(--font-heading);
  font-size: clamp(5rem, 9vw, 8rem);
  line-height: 0.8;
}

.home-process-reference__content {
  display: grid;
  gap: 0.65rem;
}

.home-process-reference__content h3 {
  font-size: clamp(2rem, 3vw, 3rem);
}

.home-process-reference__content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
}

@media (max-width: 980px) {
  .home-process-reference__layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .home-process-reference__step {
    grid-template-columns: 1fr;
  }

  .home-process-reference__number {
    font-size: 4.5rem;
  }
}
</style>
