<script setup lang="ts">
import { defineProps, computed, ref } from 'vue'

// Define the NavigationMenuItem type
type NavigationMenuItem = {
  label: string
  icon?: string
  to?: string
  onSelect?: () => void
  active?: boolean
  suffix?: string
  kbds?: string[]
}

const props = defineProps<{
  navigation: NavigationMenuItem[]
}>()

// Transform navigation items to handle both to and onSelect
const items = computed(() => props.navigation.map(item => ({
  ...item,
  to: item.to || '#',
  click: item.onSelect
})))
</script>

<template>
  <UNavigationMenu
    color="primary"
    variant="link"
    highlight
    :items="items"
    class="justify-center"
  />
</template>
