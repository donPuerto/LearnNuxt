<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

const navItems = ref([
  {
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Projects',
    icon: 'i-heroicons-folder',
    to: '/',
    children: [
      {
        label: 'Active Projects',
        icon: 'i-heroicons-rocket-launch',
        description: 'View all active projects',
        to: '/',
      },
      {
        label: 'Archived',
        icon: 'i-heroicons-archive-box',
        description: 'View archived projects',
        to: '/',
      },
    ],
  },
  {
    label: 'Account',
    icon: 'i-heroicons-user-circle',
    children: [
      {
        label: 'Profile',
        icon: 'i-heroicons-user',
        description: 'View your profile',
        to: '/',
      },
      {
        label: 'Settings',
        icon: 'i-heroicons-cog-6-tooth',
        description: 'Manage your preferences',
        to: '/',
      },
      {
        label: 'Logout',
        icon: 'i-heroicons-arrow-right-on-rectangle',
        description: 'Sign out of your account',
        click: () => console.log('Logout clicked'),
      },
    ],
  },
])
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b bg-white px-4 py-2.5 dark:bg-gray-900 dark:border-gray-700">
    <div class="flex items-center justify-between">
      <!-- Logo Section -->
      <div class="flex items-center gap-2">
        <UIcon
          name="vscode-icons:file-type-nuxt"
          class="size-8"
        />
        <span class="hidden text-xl font-semibold sm:inline-block">Nuxt Boilerplate</span>
      </div>

      <!-- Navigation Menu -->
      <UNavigationMenu :items="navItems" />

      <!-- Theme Toggle -->
      <UButton
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        color="gray"
        variant="ghost"
        aria-label="Toggle Theme"
        @click="isDark = !isDark"
      />
      <ThemePickerButton />
    </div>
  </nav>
</template>
