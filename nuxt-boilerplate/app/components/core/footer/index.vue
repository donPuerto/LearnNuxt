<template>
    <footer class="border-t border-gray-200 dark:border-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="py-12 flex flex-col items-center gap-8">
          <!-- Logo -->
          <div class="flex justify-center">
            <UIcon
              name="i-custom-logo"
              class="size-12 text-primary-500 dark:text-primary-400"
            />
          </div>
  
          <!-- Copyright -->
          <div class="text-center">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ new Date().getFullYear() }} Nuxt Boilerplate. All rights reserved.
            </p>
          </div>
  
          <!-- Social Links -->
          <div class="flex items-center space-x-6">
            <UButton
              v-for="social in socials"
              :key="social.name"
              :icon="social.icon"
              :to="social.url"
              target="_blank"
              color="primary"
              variant="ghost"
              :aria-label="social.name"
            />
          </div>
  
          <!-- Description -->
          <p class="text-center text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
            A modern and feature-rich boilerplate built with Nuxt 4, enhanced by Nuxt UI 3, and powered by TailwindCSS. Perfect for building scalable, performant, and beautiful web applications.
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  const socials = [
    {
      name: 'Twitter',
      icon: 'i-simple-icons-twitter',
      url: 'https://x.com/donpuerto_'
    },
    {
      name: 'LinkedIn',
      icon: 'i-simple-icons-linkedin',
      url: 'https://www.linkedin.com/in/don-puerto-58a26295/'
    },
    {
      name: 'GitHub',
      icon: 'i-simple-icons-github',
      url: 'https://github.com/donPuerto/LearnNuxt/tree/main/nuxt-boilerplate'
    }
  ]
  </script>