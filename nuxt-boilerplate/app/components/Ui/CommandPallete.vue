<script setup lang="ts">
import { ref } from 'vue'

const groups = ref([
  {
    id: 'actions',
    items: [
      {
        label: 'Components',
        suffix: '✨ A Collection of Beautiful Nuxt UI Components',
        icon: 'i-lucide-layout-template',
        kbds: ['meta', 'C'],
      },
      {
        label: 'Roadmap',
        suffix: '📋 Roadmap Board: Progress and Plans',
        icon: 'i-carbon:roadmap',
        kbds: ['meta', 'R'],
      },
      {
        label: 'Releases',
        suffix: '🔥 Release Highlights: New Features & Fixes',
        icon: 'i-catppuccin:release',
        kbds: ['meta', 'E'],
      },
    ],
  },
])

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onSelect(item: any) {
  if (item.onSelect) {
    item.onSelect()
  }
}
</script>

<template>
  <UModal>
    <UTooltip text="Command Pallete" :kbds="['meta', 'P']">
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
