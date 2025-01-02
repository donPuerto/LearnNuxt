<script setup lang="ts">
import { ref } from 'vue'

const isDrawerOpen = ref(false)

const toggleDrawer = () => {
  isDrawerOpen.value = !!isDrawerOpen.value
}

defineShortcuts({
  meta_g: () => {
    window.open('https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate', '_blank')
  },
  o: () => isDrawerOpen.value = !isDrawerOpen.value,
  meta_t: () => {
    // Define action for Theme Picker shortcut
    // Example: Toggle theme picker
  },
  meta_k: () => {
    // Define action for CommandPallete shortcut
    // Example: Open command palette
  },
})

const navigation = [
  {
    label: 'Components',
    icon: 'i-lucide-layout-template',
    to: '/components',
    active: true,
  },
  {
    label: 'Roadmap',
    icon: 'i-carbon:roadmap',
    to: '/roadmap',
  },
  {
    label: 'Releases',
    icon: 'i-catppuccin:release',
    to: '/releases',

  },
]
</script>

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
            <span class="hidden lg:block text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Nuxt <span class="text-[var(--ui-primary)]">Boilerplate</span>
            </span>
          </NuxtLink>
        </div>

        <!-- Middle: Navigation -->
        <div class="items-center hidden space-x-8 md:flex">
          <UiNavigationMenu :navigation="navigation" />
        </div>

        <!-- Right side: Icons -->
        <div class="flex items-center space-x-2">
          <UiThemePicker />
          <UiCommandPallete />
          <UTooltip text="Open on GitHub" :kbds="['meta', 'G']" class="hidden lg:flex">
            <UButton
              color="primary"
              size="xl"
              variant="ghost"
              to="https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate"
              target="_blank"
              icon="i-simple-icons-github"
              aria-label="GitHub"
            />
          </UTooltip>

          <UDrawer
            v-model:open="isDrawerOpen"
            should-scale-background
            handle
            title="Pages"
            description="Navigation menu for mobile devices"
          >
            <UButton
              :icon="isDrawerOpen ? 'i-lucide-x' : 'i-lucide-menu'"
              color="primary"
              variant="ghost"
              class="lg:hidden"
              aria-label="Toggle navigation menu"
              @click="toggleDrawer"
            />

            <template #body>
              <div class="h-64">
                <UNavigationMenu
                  orientation="vertical"
                  color="primary"
                  variant="link"
                  highlight
                  :items="navigation"
                  class="justify-center"
                />
              </div>
            </template>
          </UDrawer>
        </div>
      </div>
    </div>
  </nav>
</template>
