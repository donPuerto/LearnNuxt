<template>
  <UModal>
    <UButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-search"
      :style="{ color: `var(--ui-primary)` }"
    />

    <template #content>
      <UCommandPalette
        :groups="groups"
        class="h-80"
        @update:model-value="onSelect"
      />
    </template>
  </UModal>
</template>

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
        onSelect() {
          console.log('Components')
        }
      },
      {
        label: 'Roadmap',
        suffix: '📋 Roadmap Board: Progress and Plans',
        icon: 'i-carbon:roadmap',
        kbds: ['meta', 'R'],
        onSelect() {
          console.log('Roadmap')
        }
      },
      {
        label: 'Releases',
        suffix: '🔥 Release Highlights: New Features & Fixes',
        icon: 'i-catppuccin:release',
        kbds: ['meta', 'E'],
        onSelect() {
          console.log('Releases')
        }
      },    
    ]
  }
])

function onSelect(item: any) {
  if (item.onSelect) {
    item.onSelect()
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
