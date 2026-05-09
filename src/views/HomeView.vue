<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ProjectCard from '@/components/ProjectCard.vue'
import { appProjects } from '@/content/apps'
import { landingCopy, pickLocalized, siteConfig } from '@/content/site'
import { usePageMeta } from '@/composables/usePageMeta'
import type { SiteLocale } from '@/types/content'

const { locale, t } = useI18n()

const currentLocale = computed(() => locale.value as SiteLocale)
const marqueeProjects = computed(() => [
  ...appProjects.map((project) => project.name),
  ...appProjects.map((project) => project.name),
])

usePageMeta({
  title: computed(() => siteConfig.brandName),
  description: computed(() => pickLocalized(currentLocale.value, landingCopy.heroLead)),
  path: '/',
  image: computed(() => appProjects[0]?.featureUrl ?? `${siteConfig.baseUrl}/favicon.svg`),
})
</script>

<template>
  <div class="home">
    <section class="home-hero grid-background">
      <div class="container home-hero__layout">
        <div class="home-hero__copy">
          <p class="eyebrow">
            <span class="eyebrow__dot" />
            {{ pickLocalized(currentLocale, landingCopy.heroBadge) }}
          </p>

          <h1 class="home-hero__title">
            <span>{{ pickLocalized(currentLocale, landingCopy.heroTitleLead) }}</span>
            <span class="text-highlight">{{
              pickLocalized(currentLocale, landingCopy.heroTitleAccent)
            }}</span>
          </h1>

          <p class="home-hero__lead">
            {{ pickLocalized(currentLocale, landingCopy.heroLead) }}
          </p>

          <div class="button-row home-hero__actions">
            <RouterLink class="button-dark" :to="{ path: '/', hash: '#apps' }">
              {{ t('actions.browseApps') }}
            </RouterLink>
            <!-- <a
              class="button-secondary"
              :href="siteConfig.googlePlayDeveloperUrl"
              target="_blank"
              rel="noreferrer"
            >
              {{ t('actions.openCatalog') }}
            </a>
            <a
              class="button-secondary"
              :href="siteConfig.appStoreDeveloperUrl"
              target="_blank"
              rel="noreferrer"
            >
              {{ t('actions.openAppStoreCatalog') }}
            </a> -->
            <a
              class="button-inline home-hero__linkedin"
              :href="siteConfig.linkedinUrl"
              target="_blank"
              rel="noreferrer"
            >
              {{ t('actions.linkedin') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="home-proof">
      <div class="container">
        <div class="home-proof__marquee" aria-hidden="true">
          <div class="home-proof__track">
            <span v-for="(name, index) in marqueeProjects" :key="`${name}-${index}`">{{
              name
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="apps" class="section section--light home-apps">
      <div class="container">
        <div class="home-section-heading">
          <p class="eyebrow">
            <span class="eyebrow__dot" />
            {{ t('nav.apps') }}
          </p>
          <h2>{{ t('home.featuredTitle') }}</h2>
        </div>

        <div class="home-apps__grid">
          <ProjectCard v-for="project in appProjects" :key="project.slug" :project="project" />
        </div>
      </div>
    </section>

    <section id="contact" class="home-cta grid-background">
      <div class="container home-cta__inner">
        <p class="eyebrow">
          <span class="eyebrow__dot" />
          {{ pickLocalized(currentLocale, landingCopy.finalEyebrow) }}
        </p>
        <h2>{{ pickLocalized(currentLocale, landingCopy.finalTitle) }}</h2>
        <p class="home-cta__lead">{{ pickLocalized(currentLocale, landingCopy.finalLead) }}</p>

        <div class="button-row home-cta__actions">
          <a class="button-dark" :href="`mailto:${siteConfig.email}`">
            {{ t('actions.email') }}
          </a>
          <a
            class="button-secondary"
            :href="siteConfig.linkedinUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ t('actions.linkedin') }}
          </a>
          <a
            class="button-secondary"
            :href="siteConfig.googlePlayDeveloperUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ t('actions.openCatalog') }}
          </a>
          <a
            class="button-secondary"
            :href="siteConfig.appStoreDeveloperUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ t('actions.openAppStoreCatalog') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home-hero {
  display: flex;
  align-items: center;
  min-height: calc(100svh - var(--header-offset, var(--header-height)));
  padding: clamp(3rem, 8vw, 6rem) 0;
}

.home-hero__layout {
  display: block;
}

.home-hero__copy {
  display: grid;
  gap: 1.25rem;
  max-width: 44rem;
}

.home-hero__title,
.home-section-heading h2,
.home-cta__inner h2 {
  font-size: clamp(3.4rem, 10vw, 7.5rem);
}

.home-hero__title {
  display: grid;
  gap: 0.3rem;
}

.home-hero__lead,
.home-cta__lead {
  margin: 0;
  max-width: 34rem;
  color: var(--color-text-muted);
  font-size: clamp(1.02rem, 1.8vw, 1.2rem);
}

.home-hero__actions,
.home-cta__actions {
  align-items: center;
}

.home-hero__linkedin {
  color: var(--color-text-muted);
  font-size: 0.88rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.home-hero__linkedin:hover,
.home-hero__linkedin:focus-visible {
  color: var(--color-text);
}

.home-proof {
  overflow: hidden;
  border-top: 1px solid var(--color-border-dark);
  border-bottom: 1px solid var(--color-border-dark);
  background: var(--color-bg-dark);
  color: var(--color-text-inverse);
  padding: 1rem 0;
}

.home-proof__marquee {
  overflow: hidden;
  white-space: nowrap;
}

.home-proof__track {
  display: inline-flex;
  gap: 2rem;
  min-width: max-content;
  animation: marquee 24s linear infinite;
}

.home-proof__track span {
  color: rgba(255, 255, 255, 0.62);
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 0.9;
  text-transform: uppercase;
}

.home-section-heading {
  display: grid;
  gap: 1rem;
  max-width: 46rem;
  margin-bottom: 2.5rem;
}

.home-apps__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}

.home-cta {
  border-top: 1px solid var(--color-border-light);
  background-color: var(--color-accent);
  padding: clamp(4.5rem, 9vw, 7rem) 0;
}

.home-cta__inner {
  display: grid;
  justify-items: center;
  gap: 1rem;
  text-align: center;
}

.home-cta__inner h2 {
  max-width: 9ch;
}

.home-cta__lead {
  color: rgba(23, 30, 25, 0.76);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 680px) {
  .home-apps__grid {
    grid-template-columns: 1fr;
  }
}
</style>
