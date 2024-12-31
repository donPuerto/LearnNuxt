<template>
  <nav class="border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Left side: Logo and Title -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center gap-x-3">
            <UIcon 
              name="i-custom-logo" 
              class="size-10 w-auto text-primary-500 dark:text-primary-400"
            />
            <span class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Nuxt Boilerplate
            </span>
          </NuxtLink>
        </div>

        <!-- Middle: Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-base font-medium text-gray-700 hover:text-primary-500 transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary-400"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Right side: Icons -->
        <div class="flex items-center space-x-6">
          <button 
            v-for="icon in icons" 
            :key="icon.name"
            class="text-gray-700 hover:text-primary-500 transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary-400"
            :aria-label="icon.name"
          >
          
            <UIcon 
              :name="icon.class" 
              class="size-10"
            />
          </button>

          <UTooltip text="Search" :kbds="['meta', 'K']">
            <UiCommandPallete />
          </UTooltip>
          <UTooltip text="Open on GitHub" :kbds="['meta', 'G']" class="hidden lg:flex">
            <UButton
              color="neutral"
              variant="ghost"
              to="https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate"
              target="_blank"
              icon="i-simple-icons-github"
              aria-label="GitHub"
            />
          </UTooltip>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">


const navigation = [
  { name: 'Components', href: '/components' },
  { name: 'RoadMap', href: '/roadmap' },
  { name: 'Releases', href: '/releases' },
];

defineShortcuts({
  meta_g: () => {
    window.open('https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate', '_blank')
  }
})

const icons = [
  { 
    name: 'Theme',
    class: 'i-lucide-swatch-book',
  },
  { 
    name: 'Search',
    class: 'i-lucide-search',
  },
  { 
    name: 'GitHub',
    class: 'i-simple-icons-github',
  },
];
</script>