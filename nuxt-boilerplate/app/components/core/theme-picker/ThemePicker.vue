<script setup lang="ts">
const colorMode = useColorMode()
const appConfig = useAppConfig()

const primaryColors = [
  { name: 'Slate', value: 'slate' },
  { name: 'Gray', value: 'gray' },
  { name: 'Zinc', value: 'zinc' },
  { name: 'Green', value: 'green' },
  { name: 'Blue', value: 'blue' },
  { name: 'Red', value: 'red' },
  { name: 'Yellow', value: 'yellow' },
]

const radiuses = [0, 0.125, 0.25, 0.375, 0.5]
const radius = computed({
  get() { return appConfig.theme.radius },
  set(option) {
    appConfig.theme.radius = option
    window.localStorage.setItem('nuxt-ui-radius', String(option))
  },
})

const mode = computed({
  get() { return colorMode.value },
  set(option) { colorMode.preference = option },
})
</script>

<template>
  <UPopover>
    <UButton
      icon="i-heroicons-swatch"
      color="gray"
      variant="ghost"
      aria-label="Theme Settings"
    />

    <template #content>
      <div class="w-64 p-4 space-y-4">
        <!-- Colors -->
        <div class="space-y-2">
          <h3 class="text-sm font-medium">
            Theme Color
          </h3>
          <div class="grid grid-cols-4 gap-2">
            <UButton
              v-for="color in primaryColors"
              :key="color.value"
              :color="color.value"
              variant="solid"
              size="xs"
              class="h-8"
              :class="{ 'ring-2 ring-offset-2': appConfig.ui.primary === color.value }"
              @click="appConfig.ui.primary = color.value"
            />
          </div>
        </div>

        <!-- Radius -->
        <div class="space-y-2">
          <h3 class="text-sm font-medium">
            Border Radius
          </h3>
          <UButtonGroup size="sm">
            <UButton
              v-for="r in radiuses"
              :key="r"
              :color="radius === r ? 'primary' : 'gray'"
              variant="soft"
              @click="radius = r"
            >
              {{ r }}
            </UButton>
          </UButtonGroup>
        </div>

        <!-- Theme Toggle -->
        <div class="space-y-2">
          <h3 class="text-sm font-medium">
            Color Mode
          </h3>
          <UToggle
            v-model="mode"
            :on-icon="appConfig.ui.icons.dark"
            :off-icon="appConfig.ui.icons.light"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>
