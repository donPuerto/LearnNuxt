<script setup lang="ts">
import { ref } from 'vue'

const sidebarOpen = ref(false)

const menuItems = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'i-heroicons-home',
  },
  {
    name: 'Components',
    to: '/components',
    icon: 'i-heroicons-squares-2x2',
  },
  {
    name: 'Projects',
    to: '/projects',
    icon: 'i-heroicons-folder',
  },
  {
    name: 'Tasks',
    to: '/tasks',
    icon: 'i-heroicons-clipboard-document-list',
  },
  {
    name: 'Team',
    to: '/team',
    icon: 'i-heroicons-users',
  },
  {
    name: 'Settings',
    to: '/settings',
    icon: 'i-heroicons-cog-6-tooth',
  },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navbar -->
    <nav class="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button
              type="button"
              class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
              @click="sidebarOpen = !sidebarOpen"
            >
              <span class="sr-only">Open sidebar</span>
              <UIcon name="i-heroicons-bars-3" class="size-6" />
            </button>
            <NuxtLink to="/" class="ml-2 flex md:mr-24">
              <UIcon name="i-simple-icons-nuxtdotjs" class="size-8 text-primary-500" />
              <span class="ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Dashboard
              </span>
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-3">
            <UiThemePicker />
            <UiCommandPallete />
          </div>
        </div>
      </div>
    </nav>

    <!-- Sidebar -->
    <aside
      :class="[sidebarOpen ? 'translate-x-0' : '-translate-x-full']"
      class="fixed left-0 top-0 z-40 h-screen w-64 transform border-r border-gray-200 bg-white pt-14 transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full overflow-y-auto px-3 pb-4">
        <ul class="space-y-2 font-medium">
          <li v-for="item in menuItems" :key="item.name">
            <NuxtLink
              :to="item.to"
              class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              :class="{ 'bg-gray-100 dark:bg-gray-700': $route.path === item.to }"
            >
              <UIcon :name="item.icon" class="size-6 text-gray-500 transition duration-75 dark:text-gray-400" />
              <span class="ml-3">{{ item.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="min-h-screen bg-gray-50 pt-14 transition-all duration-300 dark:bg-gray-900 sm:ml-64">
      <div class="min-h-[calc(100vh-8rem)] p-4">
        <div class="text-3xl font-bold">
          Components
        </div>
      </div>

      <!-- Footer -->
      <footer class="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:flex sm:items-center sm:justify-between sm:p-6">
        <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          {{ new Date().getFullYear() }} Your Company. All Rights Reserved.
        </span>
        <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <UIcon name="i-simple-icons-github" class="size-5" />
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <UIcon name="i-simple-icons-twitter" class="size-5" />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>
