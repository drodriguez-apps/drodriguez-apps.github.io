export type SiteLocale = 'en' | 'es'

export interface LocalizedText {
  en: string
  es: string
}

export interface AppHighlight {
  title: LocalizedText
  description: LocalizedText
}

export interface AppPalette {
  accent: string
  soft: string
  gradient: string
}

export interface AppProject {
  slug: string
  name: string
  storeTitle: string
  category: LocalizedText
  updatedLabel: LocalizedText
  summary: LocalizedText
  previewSummary?: LocalizedText
  description: LocalizedText[]
  highlights: AppHighlight[]
  featureAlt: LocalizedText
  downloads: string
  rating?: string
  storeUrl: string
  iosStoreUrl?: string
  iconUrl: string
  featureUrl: string
  featured: boolean
  palette: AppPalette
}

export interface LegalSection {
  title: LocalizedText
  paragraphs: LocalizedText[]
}

export interface LegalDocument {
  title: LocalizedText
  summary: LocalizedText
  sections: LegalSection[]
}
