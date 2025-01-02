<script setup lang="ts">
import type { LocaleCode } from '~/types/i18n'

const { $i18n } = useNuxtApp()
const i18n = useI18n()
const locales = i18n.locales.value
const currentLocale = ref<LocaleCode>(i18n.locale.value as LocaleCode)

const switchLocale = async (locale: LocaleCode) => {
  await $i18n.setLocale(locale)
  currentLocale.value = locale
}
</script>

<template>
  <div class="language-switcher">
    <select v-model="currentLocale" @change="(e: Event) => switchLocale((e.target as HTMLSelectElement).value as LocaleCode)">
      <option v-for="locale in locales" :key="locale.code" :value="locale.code">
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>
