<script setup lang="ts">
const appConfig = useAppConfig()

useServerSeoMeta({
  title: 'My Nuxt App',
  ogTitle: 'My Nuxt App',
  description: 'Welcome to my amazing Nuxt application',
  ogDescription: 'Welcome to my amazing Nuxt application',
  ogImage: 'https://your-domain.com/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp :toaster="appConfig.toaster">
    <NuxtLoadingIndicator color="#FFF" />
    <div class="bg-[var(--ui-bg)]" vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<style scoped>
div {
  font-family: Roboto, sans-serif;
}
</style>
