// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  // To re-enable _all_ Nuxt v3 behavior, set the following options:
  //  srcDir: ".",
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
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/devtools','@nuxt/eslint', '@nuxt/icon', '@nuxt/fonts', '@nuxt/fonts'],
  eslint: {
    config: {
      stylistic: true
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
