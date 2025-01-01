<template>
  <nav class="border-b border-gray-200 dark:border-gray-800">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Left side: Logo and Title -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl text-[var(--ui-text-highlighted)] min-w-0 focus-visible:outline-[var(--ui-primary)] shrink-0" aria-label="Nuxt UI">
            <UIcon 
              name="i-custom-logo"
              class="w-auto size-10 text-primary-500 dark:text-primary-400"
            />
            <span class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Nuxt <span class="text-[var(--ui-primary)]">Boilerplate</span>
            </span>
          </NuxtLink>
        </div>

        <!-- Middle: Navigation -->
        <div class="items-center hidden space-x-8 md:flex">
          <UiNavigationMenu :navigation="navigation" />
        </div>

        <!-- Right side: Icons -->
        <div class="flex items-center space-x-6">
          <UiThemePicker />
          <UiCommandPallete />
          <UTooltip text="Open on GitHub" :kbds="['meta', 'G']" class="hidden lg:flex">
            <UButton
              color="primary"
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
// defineShortcuts({
//   meta_g: () => {
//     window.open('https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate', '_blank')
//   },
//   meta_t: () => {
//     // Define action for Theme Picker shortcut
//     // Example: Toggle theme picker
//     console.log('Theme Picker shortcut activated');
//   },
//   meta_k: () => {
//     // Define action for CommandPallete shortcut
//     // Example: Open command palette
//     console.log('Command Palette shortcut activated');
//   }
// })

const navigation = [
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




</script>
