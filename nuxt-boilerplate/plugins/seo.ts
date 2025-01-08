export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const config = useRuntimeConfig()

  // Base structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: appConfig.seo.title,
    description: appConfig.seo.description,
    url: config.public.baseUrl
  }

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | ${appConfig.seo.title}` : appConfig.seo.title
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: appConfig.seo.keywords },
      { name: 'author', content: appConfig.seo.author },
      { name: 'robots', content: appConfig.seo.robots },
      // Open Graph - these will be the default if not overridden
      { property: 'og:type', content: appConfig.seo.openGraph.type },
      { property: 'og:site_name', content: appConfig.seo.openGraph.siteName },
      { property: 'og:image', content: `${config.public.baseUrl}${appConfig.seo.image}` },
      { property: 'og:image:alt', content: appConfig.seo.openGraph.imageAlt },
      // Twitter
      { name: 'twitter:card', content: appConfig.seo.twitter.card },
      { name: 'twitter:image', content: `${config.public.baseUrl}${appConfig.seo.image}` }
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(structuredData)
      }
    ]
  })
})
