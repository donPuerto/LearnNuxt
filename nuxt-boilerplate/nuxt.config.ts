// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)


export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      version: pkg.version
    }
  },
  modules: ['@nuxt/ui', '@nuxt/devtools',  '@nuxt/eslint', '@nuxt/icon', '@nuxt/fonts', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
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
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: resolve('./app/assets/icons')    
    }],
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    },
    provider: 'iconify',
    serverBundle: {
      collections: ['uil', 'heroicons', 'logos', 'lucide', 'simple-icons', 'mdi', 'logos', 'skill-icons'],
    },
  },
 
})
