<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
const appConfig = useAppConfig()
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
