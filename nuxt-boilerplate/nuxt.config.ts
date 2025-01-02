// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { createResolver } from '@nuxt/kit'
import pkg from './package.json'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/devtools', '@nuxt/eslint', '@nuxt/icon', '@nuxt/fonts'],
  devtools: { enabled: true },
  app: {
    rootAttrs: {
      'vaul-drawer-wrapper': '',
      'class': 'bg-[var(--ui-bg)]',
    },
  },
  css: ['~/assets/css/main.css'],
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
  compatibilityDate: '2024-11-01',
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
      collections: ['uil', 'heroicons', 'logos', 'lucide', 'simple-icons', 'mdi', 'logos', 'skill-icons', 'carbon', ' catppuccin'],
    },
  },

})
