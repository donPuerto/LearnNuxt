<script setup lang="ts">
const items = ref([
  [
    {
      label: 'Components',
      icon: 'i-lucide-layout-template',
      to: '/components',
      active: true
    },
    {
      label: 'Roadmap',
      icon: 'i-carbon:roadmap',
      to: '/roadmap'
    },
    {
      label: 'Releases',
      icon: 'i-catppuccin:release',
      to: '/releases',
     
    }
  ]
  
])
</script>

<template>
  <UNavigationMenu color="primary" variant="link" highlight :items="items" class="justify-center" />
</template>
