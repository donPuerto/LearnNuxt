<script setup lang="ts">
import { computed } from 'vue'
import colors from 'tailwindcss/colors'
import { omit } from 'lodash-es'

const appConfig = useAppConfig()
const colorMode = useColorMode()

useHead({
  title: 'Theme Picker',
  meta: [{ name: 'description', content: 'Theme picker example with Nuxt UI' }],
})

// Define colors and settings
const neutralColors = ['slate', 'gray', 'zinc', 'neutral', 'stone']
const colorsToOmit = ['inherit', 'current', 'transparent', 'black', 'white', ...neutralColors]
const primaryColors = Object.keys(omit(colors, colorsToOmit))

const primary = computed({
  get() {
    return appConfig.ui.primary
  },
  set(color: string) {
    appConfig.ui.primary = color
    localStorage.setItem('nuxt-ui-primary', color)
  },
})

const neutral = computed({
  get() {
    return appConfig.ui.gray
  },
  set(color: string) {
    appConfig.ui.gray = color
    localStorage.setItem('nuxt-ui-neutral', color)
  },
})

const radiuses = [0, 0.125, 0.25, 0.375, 0.5]
const radius = computed({
  get() {
    return appConfig.ui.rounded
  },
  set(option) {
    appConfig.ui.rounded = option
    localStorage.setItem('nuxt-ui-radius', String(option))
  },
})

const modes = [
  { label: 'light', icon: appConfig.ui.icons.light },
  { label: 'dark', icon: appConfig.ui.icons.dark },
]
const mode = computed({
  get() {
    return colorMode.value
  },
  set(option) {
    colorMode.preference = option
  },
})
</script>

<template>
  <div :class="`bg-${neutral}-100 dark:bg-${neutral}-800 p-4 space-y-4 rounded-${radius}`">
    <!-- Debug Panel -->
    <div :class="`bg-${neutral}-100 dark:bg-${neutral}-800 p-4 mb-4 rounded-${radius}`">
      <p>Selected Color: {{ primary }}</p>
      <p>Available Colors: {{ primaryColors.length }}</p>
    </div>

    <UPopover :ui="{ content: 'w-72 px-6 py-4 flex flex-col gap-4' }">
      <template #default="{ open }">
        <UButton
          icon="i-lucide-swatch-book"
          :color="neutral"
          :variant="open ? 'soft' : 'ghost'"
          square
          aria-label="Color picker"
          :ui="{ leadingIcon: `text-[var(--ui-${primary})]` }"
        />
      </template>

      <template #content>
        <fieldset>
          <legend class="text-[11px] leading-none font-semibold mb-2">
            Primary
          </legend>
          <div class="grid grid-cols-3 gap-1 -mx-2">
            <button
              v-for="color in primaryColors"
              :key="color"
              class="w-8 h-8 transition-transform rounded-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
              :class="[
                `bg-${color}-500`,
                primary === color ? 'ring-2 ring-offset-2 ring-gray-400' : '',
              ]"
              @click="primary = color"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend class="text-[11px] leading-none font-semibold mb-2">
            Neutral
          </legend>
          <div class="grid grid-cols-3 gap-1 -mx-2">
            <button
              v-for="color in neutralColors"
              :key="color"
              class="w-8 h-8 transition-transform rounded-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
              :class="[
                `bg-${color}-500`,
                neutral === color ? 'ring-2 ring-offset-2 ring-gray-400' : '',
              ]"
              @click="neutral = color"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend class="text-[11px] leading-none font-semibold mb-2">
            Radius
          </legend>
          <div class="grid grid-cols-5 gap-1 -mx-2">
            <button
              v-for="r in radiuses"
              :key="r"
              class="w-8 h-8 transition-transform rounded-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
              :class="[
                radius === r ? 'ring-2 ring-offset-2 ring-gray-400' : '',
              ]"
              @click="radius = r"
            >
              {{ r }}
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend class="text-[11px] leading-none font-semibold mb-2">
            Theme
          </legend>
          <div class="flex gap-1 -mx-2">
            <button
              v-for="m in modes"
              :key="m.label"
              class="w-8 h-8 transition-transform rounded-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
              :class="[
                mode === m.label ? 'ring-2 ring-offset-2 ring-gray-400' : '',
              ]"
              @click="mode = m.label"
            >
              <span :class="m.icon" />
            </button>
          </div>
        </fieldset>
      </template>
    </UPopover>
  </div>
</template>
