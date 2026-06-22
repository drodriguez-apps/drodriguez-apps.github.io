import { useHead } from '@unhead/vue'
import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { useI18n } from 'vue-i18n'

import { siteConfig } from '@/content/site'

interface MetaOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  path: MaybeRefOrGetter<string>
  image?: MaybeRefOrGetter<string>
  type?: MaybeRefOrGetter<'website' | 'article'>
  schema?: MaybeRefOrGetter<Record<string, unknown> | null>
}

export function usePageMeta(options: MetaOptions) {
  const { locale } = useI18n()

  useHead(
    computed(() => {
      const title = toValue(options.title)
      const description = toValue(options.description)
      const path = toValue(options.path)
      const image = options.image ? toValue(options.image) : `${siteConfig.baseUrl}/favicon.ico`
      const schema = options.schema ? toValue(options.schema) : null
      const type = options.type ? toValue(options.type) : 'website'
      const canonicalUrl = `${siteConfig.baseUrl}${path}`

      return {
        title,
        htmlAttrs: {
          lang: locale.value,
        },
        link: [
          {
            rel: 'canonical',
            href: canonicalUrl,
          },
        ],
        meta: [
          {
            name: 'description',
            content: description,
          },
          {
            property: 'og:type',
            content: type,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: description,
          },
          {
            property: 'og:url',
            content: canonicalUrl,
          },
          {
            property: 'og:image',
            content: image,
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: description,
          },
          {
            name: 'twitter:image',
            content: image,
          },
        ],
        script: schema
          ? [
              {
                key: `schema-${path}`,
                type: 'application/ld+json',
                textContent: JSON.stringify(schema),
              },
            ]
          : [],
      }
    }),
  )
}
