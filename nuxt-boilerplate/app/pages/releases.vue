<script setup lang="ts">
type LocaleCode = 'en' | 'fr' | 'de'

interface LocaleItem {
  code: LocaleCode
  name: string
}

interface SelectItem {
  label: string
  value: LocaleCode
}

const { t, locale, setLocale } = useI18n()

const availableLocales: LocaleItem[] = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
]

const items: SelectItem[] = availableLocales.map(locale => ({
  label: locale.name,
  value: locale.code,
}))

const selectedLocale = ref<LocaleCode>(locale.value as LocaleCode)

const switchLanguage = async (value: LocaleCode): Promise<void> => {
  if (value && availableLocales.some(locale => locale.code === value)) {
    await setLocale(value)
    selectedLocale.value = value
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Language Selector -->
    <div class="mb-8 flex justify-end">
      <USelect
        v-model="selectedLocale"
        :items="items"
        class="w-48 bg-white dark:bg-gray-800"
        :label="t('common.search')"
        @update:model-value="switchLanguage"
      />
    </div>

    <!-- Page Content -->
    <div class="space-y-6">
      <h1 class="text-4xl font-bold mb-6">
        {{ t('navigation.releases') }}
      </h1>

      <div class="grid gap-6">
        <!-- Sample Release Card -->
        <UCard>
          <template #header>
            <div class="flex justify-between items-center">
              <h2 class="text-xl font-semibold">
                v1.0.0
              </h2>
              <UBadge color="primary">
                Latest
              </UBadge>
            </div>
          </template>

          <div class="space-y-4">
            <p>{{ t('common.learn_more') }}</p>

            <div class="flex gap-4">
              <UButton
                color="primary"
                variant="solid"
              >
                {{ t('common.get_started') }}
              </UButton>

              <UButton
                color="primary"
                variant="outline"
              >
                {{ t('navigation.documentation') }}
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
