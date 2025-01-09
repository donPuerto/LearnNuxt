// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { createResolver } from '@nuxt/kit'
import pkg from './package.json'

const { resolve } = createResolver(import.meta.url)

// Define config with proper type
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '~/assets/css/main.css' }
      ]
    },
    rootAttrs: {
      'vaul-drawer-wrapper': '',
      'class': 'bg-[var(--ui-bg)]',
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: 'Nuxt Boilerplate',
    description: 'A modern Nuxt 3 boilerplate with comprehensive SEO setup',
    defaultLocale: 'en',
  },

  runtimeConfig: {
    public: {
      version: pkg.version,
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      dependencies: {
        vue: pkg.dependencies.vue,
        nuxt: pkg.dependencies.nuxt,
        nuxtUI: pkg.dependencies['@nuxt/ui'],
      },
      devDependencies: {
        typescript: pkg.devDependencies.typescript,
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  // To re-enable _all_ Nuxt v3 behavior, set the following options:
  // srcDir: ".",
  //  dir: {
  //   app: "app",
  // },
  // experimental: {
  //   scanPageMeta: 'after-resolve',
  //   sharedPrerenderData: false,
  //   compileTemplate: true,
  //   resetAsyncDataToUndefined: true,
  //   templateUtils: true,
  //   relativeWatchPaths: true,
  //   normalizeComponentNames: false,
  //   spaLoadingTemplateLocation: 'within',
  //   defaults: {
  //     useAsyncData: {
  //       deep: true
  //     }
  //   }
  // },
  // features: {
  //   inlineStyles: true
  // },
  // unhead: {
  //   renderSSRHeadOptions: {
  //     omitLineBreaks: false
  //   }
  // }
  compatibilityDate: '2025-01-09',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      'autoprefixer': {},
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  // i18n: {
  //   strategy: 'prefix_except_default',
  //   defaultLocale: 'en',
  //   locales: [
  //     {
  //       code: 'en',
  //       name: 'English',
  //       file: 'en.json',
  //     },
  //     {
  //       code: 'es',
  //       name: 'Español',
  //       file: 'es.json',
  //     },
  //   ],
  //   lazy: true,
  // },
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: resolve('./app/assets/icons'),
    }],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: 'iconify',
    serverBundle: {
      collections: ['uil', 'heroicons', 'logos', 'lucide', 'simple-icons', 'mdi', 'logos', 'skill-icons', 'carbon', 'catppuccin'],
    },
  },
  robots: {
    sitemap: ['/sitemap.xml'],
    robotsEnabledValue: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
})