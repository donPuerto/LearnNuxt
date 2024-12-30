<template>
  <UApp :toaster="appConfig.toaster">
    <NuxtLoadingIndicator color="#FFF" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const appConfig = useAppConfig()
</script>

<style scoped>
div {
  font-family: Roboto, sans-serif;
}
</style>
