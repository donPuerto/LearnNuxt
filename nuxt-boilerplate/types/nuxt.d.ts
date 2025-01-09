import type { NuxtConfig } from '@nuxt/schema'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    css?: string[]
    postcss?: {
      plugins?: Record<string, any>
    }
    eslint?: {
      config?: {
        stylistic?: boolean
      }
    }
    i18n?: {
      strategy?: string
      defaultLocale?: string
      langDir?: string
      lazy?: boolean
      locales?: Array<{
        code: string
        iso: string
        name: string
        file: string
      }>
    }
    icon?: {
      customCollections?: Array<{
        prefix: string
        dir: string
      }>
      clientBundle?: {
        scan?: boolean
        includeCustomCollections?: boolean
      }
      provider?: string
      serverBundle?: {
        collections?: string[]
      }
    }
    robots?: {
      sitemap?: string[]
      robotsEnabledValue?: string
    }
  }
}
