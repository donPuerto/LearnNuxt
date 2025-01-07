<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
const appConfig = useAppConfig()
const config = useRuntimeConfig()

// Use SEO settings from app.config.ts
useHead({
  title: appConfig.seo.title,
  link: [
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  meta: [
    { name: 'description', content: appConfig.seo.description },
    { name: 'keywords', content: appConfig.seo.keywords },
    { name: 'author', content: appConfig.seo.author },
    { name: 'robots', content: appConfig.seo.robots },
    // Open Graph
    { property: 'og:title', content: appConfig.seo.openGraph.title },
    { property: 'og:description', content: appConfig.seo.openGraph.description },
    { property: 'og:image', content: `${config.public.baseUrl}${appConfig.seo.image}` },
    { property: 'og:image:alt', content: appConfig.seo.openGraph.imageAlt },
    { property: 'og:type', content: appConfig.seo.openGraph.type },
    { property: 'og:site_name', content: appConfig.seo.openGraph.siteName },
    // Twitter
    { name: 'twitter:card', content: appConfig.seo.twitter.card },
    { name: 'twitter:title', content: appConfig.seo.twitter.title },
    { name: 'twitter:description', content: appConfig.seo.twitter.description },
    { name: 'twitter:image', content: `${config.public.baseUrl}${appConfig.seo.image}` },
  ],
})

useServerSeoMeta({
  title: appConfig.seo.title,
  ogTitle: appConfig.seo.openGraph.title,
  description: appConfig.seo.description,
  ogDescription: appConfig.seo.openGraph.description,
  ogImage: `${config.public.baseUrl}${appConfig.seo.image}`,
  twitterCard: appConfig.seo.twitter.card,
  twitterTitle: appConfig.seo.twitter.title,
  twitterDescription: appConfig.seo.twitter.description,
  twitterImage: `${config.public.baseUrl}${appConfig.seo.image}`,
})
</script>

<template>
  <UApp :toaster="appConfig.toaster" :locale="locales[locale]">
    <NuxtLoadingIndicator color="#FFF" />
    <div class="bg-[var(--ui-bg)]" vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
