<script setup lang="ts">
import { defineProps } from 'vue';

// Define the NavigationMenuItem type
type NavigationMenuItem = {
  label: string;
  icon?: string;
  to: string;
  active?: boolean;
};

const props = defineProps<{
  navigation: NavigationMenuItem[];
}>();

const items = ref(props.navigation);
</script>

<template>
  <UNavigationMenu color="primary" variant="link" highlight :items="items" class="justify-center" />
</template>
