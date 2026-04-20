<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import LanguageToggle from '@/components/LanguageToggle.vue'
import { siteConfig } from '@/content/site'

const { t } = useI18n()
</script>

<template>
  <header class="site-header">
    <div class="container site-header__content">
      <RouterLink class="site-header__brand" to="/">
        <span class="site-header__brand-name">{{ siteConfig.brandName }}</span>
        <span class="site-header__brand-dot">.</span>
      </RouterLink>

      <nav class="site-header__nav" aria-label="Primary navigation">
        <RouterLink class="site-header__link" :to="{ path: '/', hash: '#apps' }">
          {{ t('nav.apps') }}
        </RouterLink>
        <RouterLink class="site-header__link" :to="{ path: '/', hash: '#contact' }">
          {{ t('nav.contact') }}
        </RouterLink>
      </nav>

      <div class="site-header__actions">
        <a class="site-header__plain-link" :href="`mailto:${siteConfig.email}`">
          {{ t('nav.contact') }}
        </a>
        <RouterLink class="button-dark site-header__cta" :to="{ path: '/', hash: '#apps' }">
          {{ t('actions.browseApps') }}
        </RouterLink>
        <LanguageToggle />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--color-border-light);
}

.site-header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: var(--header-height);
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
  min-width: 0;
}

.site-header__brand-name {
  font-family: var(--font-heading);
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  line-height: 0.9;
  text-transform: uppercase;
}

.site-header__brand-dot {
  color: var(--color-accent);
  font-family: var(--font-heading);
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  line-height: 0.9;
}

.site-header__nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.1rem;
}

.site-header__link {
  padding: 0.25rem 0;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.site-header__link.router-link-active,
.site-header__link:hover,
.site-header__link:focus-visible {
  color: var(--color-text);
}

.site-header__actions {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
}

.site-header__plain-link {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  font-weight: 500;
}

.site-header__plain-link:hover,
.site-header__plain-link:focus-visible {
  color: var(--color-text);
}

.site-header__cta {
  min-height: 3rem;
  padding-inline: 1.4rem;
}

@media (max-width: 860px) {
  .site-header__content {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.85rem 0;
  }

  .site-header__brand {
    width: 100%;
    justify-content: center;
  }

  .site-header__nav {
    order: 2;
    width: 100%;
  }

  .site-header__actions {
    order: 3;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
