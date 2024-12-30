<template>
  <button
    :class="[
      'w-8 h-8 rounded-md transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2',
      selected ? 'ring-2 ring-offset-2 ring-gray-400' : '',
      `bg-${chip}-500`,
    ]"
    @click="$emit('click')"
  >
    <span class="sr-only">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  chip: String,
  selected: Boolean,
})
</script>
