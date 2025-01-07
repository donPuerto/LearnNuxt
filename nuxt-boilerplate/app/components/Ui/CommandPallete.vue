<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from '#app'

const groups = ref([
  {
    id: 'actions',
    items: [
      {
        label: 'Components',
        suffix: '✨ A Collection of Beautiful Nuxt UI Components',
        icon: 'i-lucide-layout-template',
        kbds: ['meta', 'C'],
        onSelect: () => navigateTo('/components'),
      },
      {
        label: 'Roadmap',
        suffix: '📋 Roadmap Board: Progress and Plans',
        icon: 'i-carbon:roadmap',
        kbds: ['meta', 'R'],
        onSelect: () => navigateTo('/roadmap'),
      },
      {
        label: 'Releases',
        suffix: '🔥 Release Highlights: New Features & Fixes',
        icon: 'i-catppuccin:release',
        kbds: ['meta', 'E'],
        onSelect: () => navigateTo('/releases'),
      },
    ],
  },
])

const isOpen = ref(false)

defineExpose({ isOpen })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onSelect(item: any) {
  if (item.onSelect) {
    item.onSelect()
  }
  isOpen.value = false
}
</script>

<template>
  <UModal v-model="isOpen">
    <UTooltip text="Command Pallete" :kbds="['meta', 'K']">
      <UButton
        size="xl"
        color="neutral"
        variant="ghost"
        icon="i-lucide-search"
        :style="{ color: `var(--ui-primary)` }"
      />
    </UTooltip>

    <template #content>
      <UCommandPalette
        :groups="groups"
        class="h-80"
        @update:model-value="onSelect"
      />
    </template>
  </UModal>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
