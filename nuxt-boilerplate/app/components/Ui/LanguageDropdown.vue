<script setup lang="ts">
type LocaleCode = 'en' | 'fr' | 'de'
type DisplayMode = 'flag-only' | 'flag-with-label'

interface Props {
  mode?: DisplayMode
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'flag-with-label',
})

interface LocaleItem {
  code: LocaleCode
  name: string
  icon: string
}

const { locale, setLocale } = useI18n()

const availableLocales: LocaleItem[] = [
  { code: 'en', name: 'English', icon: 'flag:gb-4x3' },
  { code: 'fr', name: 'Français', icon: 'flag:fr-4x3' },
  { code: 'de', name: 'Deutsch', icon: 'flag:de-4x3' },
]

const isOpen = ref(false)
const selectedLocale = ref<LocaleCode>(locale.value as LocaleCode)

// Keep selectedLocale in sync with i18n locale
watch(locale, (newLocale) => {
  selectedLocale.value = newLocale as LocaleCode
})

const switchLanguage = async (locale: LocaleItem) => {
  await setLocale(locale.code)
  isOpen.value = false
}

const selectedLocaleItem = computed(() => {
  return availableLocales.find(locale => locale.code === selectedLocale.value)
})
</script>

<template>
  <div class="relative">
    <button
      type="button"
      class="inline-flex items-center justify-center gap-x-2 rounded-md bg-gray-100 dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
      :class="[props.mode === 'flag-only' ? 'w-16' : 'w-36']"
      @click="isOpen = !isOpen"
    >
      <UIcon
        v-if="selectedLocaleItem"
        :name="selectedLocaleItem.icon"
        class="h-5 w-6"
      />
      <span v-if="props.mode === 'flag-with-label' && selectedLocaleItem">
        {{ selectedLocaleItem.name }}
      </span>
      <UIcon
        name="i-heroicons-chevron-down"
        class="h-5 w-5 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-gray-100 dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      :class="[props.mode === 'flag-only' ? 'w-16' : 'w-36']"
    >
      <div class="py-1">
        <button
          v-for="item in availableLocales"
          :key="item.code"
          class="flex w-full items-center gap-x-2 px-3 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          :class="{ 'bg-gray-200 dark:bg-gray-700': selectedLocale === item.code }"
          @click="switchLanguage(item)"
        >
          <UIcon
            :name="item.icon"
            class="h-5 w-6"
          />
          <span v-if="props.mode === 'flag-with-label'">{{ item.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
