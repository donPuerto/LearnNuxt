<template>
  <nav class="border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Left side: Logo and Title -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl text-[var(--ui-text-highlighted)] min-w-0 focus-visible:outline-[var(--ui-primary)] shrink-0" aria-label="Nuxt UI">
            <UIcon 
              name="i-custom-logo"
              class="size-10 w-auto text-primary-500 dark:text-primary-400"
            />
            <span class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Nuxt <span class="text-[var(--ui-primary)]">Boilerplate</span>
            </span>
          </NuxtLink>
        </div>

        <!-- Middle: Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <UiNavigationMenu :navigation="navigation" />
        </div>

        <!-- Right side: Icons -->
        <div class="flex items-center space-x-6">
          <UiThemePicker />

          <UTooltip text="Search" :kbds="['meta', 'K']">
            <UiCommandPallete />
          </UTooltip>

          <UTooltip text="Open on GitHub" :kbds="['meta', 'G']" class="hidden lg:flex">
            <UButton
              color="primary"
              variant="ghost"
              to="https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate"
              target="_blank"
              icon="i-simple-icons-github"
              aria-label="GitHub"
              :style="{ color: `var(--ui-primary)` }"
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