<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

import AppHeader from '@/components/AppHeader.vue'
import { siteConfig } from '@/content/site'

const { t } = useI18n()

useHead({
  titleTemplate: (title) => {
    if (!title || title === siteConfig.brandName) {
      return siteConfig.brandName
    }

    return title + ' | ' + siteConfig.brandName
  },
})
</script>

<template>
  <a class="visually-hidden" href="#main-content">Skip to content</a>

  <div class="app-shell">
    <AppHeader />

    <main id="main-content">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container site-footer__grid">
        <div class="site-footer__intro">
          <p class="site-footer__brand">{{ siteConfig.brandName }}<span>.</span></p>
          <p class="site-footer__hint">{{ t('footer.legalHint') }}</p>
        </div>

        <div class="site-footer__column">
          <p class="site-footer__label">{{ t('footer.navigate') }}</p>
          <RouterLink class="site-footer__link" :to="{ path: '/', hash: '#apps' }">
            {{ t('nav.apps') }}
          </RouterLink>
          <RouterLink class="site-footer__link" :to="{ path: '/', hash: '#contact' }">
            {{ t('nav.contact') }}
          </RouterLink>
        </div>

        <div class="site-footer__column">
          <p class="site-footer__label">{{ t('footer.connect') }}</p>
          <a class="site-footer__link" :href="'mailto:' + siteConfig.email">
            {{ t('actions.email') }}
          </a>
          <a class="site-footer__link" :href="siteConfig.linkedinUrl" target="_blank" rel="noreferrer">
            {{ t('actions.linkedin') }}
          </a>
          <a
            class="site-footer__link"
            :href="siteConfig.googlePlayDeveloperUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ t('actions.openCatalog') }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg);
}

main {
  flex: 1;
  padding-top: var(--header-height);
}

.site-footer {
  background: var(--color-bg-dark);
  color: var(--color-text-inverse);
  padding: clamp(3rem, 6vw, 5rem) 0;
  border-top: 1px solid var(--color-border-dark);
}

.site-footer__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(0, 0.8fr));
  gap: 2rem 3rem;
}

.site-footer__brand,
.site-footer__label {
  margin: 0;
  font-family: var(--font-heading);
  line-height: 0.9;
  text-transform: uppercase;
}

.site-footer__brand {
  font-size: clamp(2.4rem, 5vw, 4.8rem);
}

.site-footer__brand span {
  color: var(--color-accent);
}

.site-footer__intro {
  display: grid;
  gap: 0.75rem;
}

.site-footer__note,
.site-footer__hint {
  margin: 0;
  max-width: 44ch;
  color: rgba(255, 255, 255, 0.72);
}

.site-footer__column {
  display: grid;
  align-content: start;
  gap: 0.85rem;
}

.site-footer__label {
  font-size: 1.5rem;
}

.site-footer__link {
  color: rgba(255, 255, 255, 0.72);
  font-weight: 500;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.site-footer__link:hover,
.site-footer__link:focus-visible {
  color: var(--color-accent);
}

@media (max-width: 860px) {
  .site-footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
