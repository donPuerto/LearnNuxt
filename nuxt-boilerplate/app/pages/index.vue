<template>
  <main :class="`relative min-h-screen overflow-hidden bg-${neutral}-50 dark:bg-${neutral}-900`">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0">
        <div :class="`absolute inset-0 bg-gradient-to-br from-${neutral}-100 via-transparent to-${neutral}-100 dark:from-${neutral}-800 dark:via-transparent dark:to-${neutral}-800 opacity-70`"></div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="relative">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="relative mx-auto max-w-[90rem] py-4 sm:py-8 lg:py-12">
          <div class="relative mx-auto max-w-5xl text-center">
            <!-- Hero Content -->
            <div class="relative z-20">
              <div class="relative">
                <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  <span class="relative mt-4 block bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Nuxt Boilerplate
                  </span>
                </h1>
                
                <p class="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300 sm:text-2xl">
                  A modern, production-ready template featuring Nuxt 4, Nuxt UI 3, and TailwindCSS. 
                  Start your next project with best practices and powerful features out of the box.
                </p>

                <!-- CTA Buttons -->
                <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <UButton
                    to="/components"
                    color="primary"
                    variant="solid"
                    size="xl"
                    class="w-full sm:w-auto"
                    trailing-icon="i-lucide-arrow-right"
                  >
                    Get Started
                  </UButton>
                  <UButton
                    as="a"
                    href="https://github.com"
                    target="_blank"
                    color="primary"
                    variant="ghost"
                    size="xl"
                    class="w-full sm:w-auto"
                    leading-icon="i-simple-icons-github"
                    trailing-icon="i-lucide-external-link"
                  >
                    View on GitHub
                  </UButton>
                </div>

                <!-- Tech Logos -->
                <div class="mt-12">
                  <p class="text-center text-lg font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                    Powered by modern technologies
                  </p>
                  <div class="mt-8 flex flex-wrap items-center justify-center gap-6">
                    <div v-for="tech in technologies" :key="tech.name" class="group flex flex-col items-center">
                      <div class="flex size-24 sm:size-28 transform items-center justify-center rounded-2xl bg-white/5 p-5 sm:p-6 shadow-lg ring-1 ring-gray-900/10 transition duration-300 ease-out group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-xl group-hover:shadow-gray-900/20 dark:bg-white/5 dark:ring-white/10 dark:group-hover:bg-white/10">
                        <UIcon 
                          :name="tech.icon" 
                          class="size-14 sm:size-16 transform transition duration-300 ease-out group-hover:rotate-3"
                          :class="`text-${tech.color}-600 dark:text-${tech.color}-400`"
                        />
                      </div>
                      <span 
                        class="mt-3 text-base font-medium"
                        :class="`text-${tech.color}-600 dark:text-${tech.color}-400`"
                      >
                        {{ tech.name }}
                      </span>
                      <span 
                        v-if="tech.version" 
                        class="mt-0.5 text-xs px-2 py-0.5 rounded-full transform transition duration-300 ease-out group-hover:scale-105"
                        :class="`bg-${tech.color}-50 text-${tech.color}-700 dark:bg-${tech.color}-400/10 dark:text-${tech.color}-400`"
                      >
                        v{{ tech.version }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="relative isolate overflow-hidden bg-white/50 px-6 py-12 shadow-2xl dark:bg-white/5 sm:rounded-3xl sm:px-16 xl:py-16">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
                    Everything you need
                  </h2>
                  <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Modern Tech Stack
                  </p>
                  <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Built with the latest technologies to ensure your project starts with a solid foundation.
                  </p>
                </div>
              </div>
              <dl class="col-span-2 grid grid-cols-1 gap-x-6 gap-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:gap-y-12">
                <div v-for="feature in features" :key="feature.name" class="group relative rounded-2xl bg-white/50 p-5 transition duration-200 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10">
                  <dt class="font-semibold text-gray-900 dark:text-white">
                    <div class="absolute -left-3 top-5 flex size-7 items-center justify-center rounded-lg bg-primary-600/10 dark:bg-primary-400/10">
                      <UIcon 
                        :name="feature.icon" 
                        class="size-4 text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    {{ feature.name }}
                  </dt>
                  <dd class="mt-2 text-sm">{{ feature.description }}</dd>
                  <div class="mt-3 flex flex-wrap gap-1.5">
                    <span v-for="tag in feature.tags" :key="tag" class="inline-flex items-center rounded-md bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/10 dark:bg-primary-400/10 dark:text-primary-400 dark:ring-primary-400/20">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </dl>
            </div>
            <div class="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu" aria-hidden="true">
              <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-600 to-purple-600 opacity-25"></div>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="mx-auto mt-8 max-w-7xl px-4 pb-16 sm:mt-12 sm:px-6 sm:pb-24 lg:mt-16 lg:px-8 lg:pb-32">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Built for Performance
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              Our boilerplate is optimized for speed, developer experience, and production readiness.
            </p>
          </div>
          <dl class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 text-white sm:mt-12 sm:grid-cols-2 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.name" class="group relative flex flex-col gap-y-2 overflow-hidden rounded-2xl bg-white/50 p-5 transition duration-200 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10">
              <dt class="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                {{ stat.name }}
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {{ stat.value }}
              </dd>
              <div class="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#app'
import { computed } from 'vue'
import { useAppConfig } from '#imports'

const appConfig = useAppConfig()
const config = useRuntimeConfig().public

const neutral = computed(() => appConfig.ui.colors.neutral)

const technologies = [
  { 
    name: 'Vue', 
    icon: 'i-logos-vue', 
    version: config.dependencies.vue,
    color: 'emerald'
  },
  { 
    name: 'Nuxt', 
    icon: 'i-logos-nuxt-icon', 
    version: config.dependencies.nuxt,
    color: 'primary'
  },
  { 
    name: 'TypeScript', 
    icon: 'i-logos-typescript-icon', 
    version: config.devDependencies.typescript,
    color: 'blue'
  },
  { 
    name: 'Vite', 
    icon: 'i-logos-vitejs', 
    version: '5.0.0',
    color: 'yellow'
  },
  { 
    name: 'Tailwind', 
    icon: 'i-logos-tailwindcss-icon', 
    version: '4.0.0-beta.8',
    color: 'cyan'
  }
];

const features = [
  {
    name: 'Nuxt 4',
    icon: 'i-custom-logo',
    description: 'Latest version of Nuxt.js with improved performance, better DX, and new features.',
    tags: ['Vue 3', 'TypeScript', 'Vite']
  },
  {
    name: 'Nuxt UI 3',
    icon: 'i-lucide-layout-template',
    description: 'Beautiful and accessible components built with TailwindCSS.',
    tags: ['Components', 'Accessible', 'Dark Mode']
  },
  {
    name: 'TailwindCSS',
    icon: 'i-simple-icons-tailwindcss',
    description: 'A utility-first CSS framework for rapid UI development.',
    tags: ['JIT', 'Responsive', 'Custom Theme']
  },
  {
    name: 'Developer Experience',
    icon: 'i-lucide-code',
    description: 'ESLint, TypeScript, and VS Code settings preconfigured.',
    tags: ['ESLint', 'DevTools', 'HMR']
  }
]

const stats = [
  { name: 'Lighthouse Score', value: '100/100' },
  { name: 'Bundle Size', value: '< 100kb' },
  { name: 'Build Time', value: '< 1s' },
  { name: 'Time to Interactive', value: '< 2s' },
]
</script>
