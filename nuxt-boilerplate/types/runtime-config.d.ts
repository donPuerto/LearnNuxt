declare module 'nuxt/schema' {
  interface RuntimeConfig {
    public: {
      version: string
      dependencies: {
        vue: string
        nuxt: string
        nuxtUI: string
      }
      devDependencies: {
        typescript: string
      }
      site: {
        url: string
        name: string
        description: string
        defaultLocale: string
      }
    }
  }

  interface NuxtConfig {
    app?: {
      head?: any
      rootAttrs?: {
        [key: string]: string
      }
    }
  }
}
