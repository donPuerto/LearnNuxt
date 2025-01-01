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

<script setup>
const appConfig = useAppConfig()
</script>

<style scoped>
div {
  font-family: Roboto, sans-serif;
}
</style>
