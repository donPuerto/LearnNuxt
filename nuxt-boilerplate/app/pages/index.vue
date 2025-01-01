<template>
  <main :class="`relative min-h-screen overflow-hidden bg-${neutral}-50 dark:bg-${neutral}-900`">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0">
        <div :class="`absolute inset-0 bg-gradient-to-br from-${neutral}-100 via-transparent to-${neutral}-100 dark:from-${neutral}-800 dark:via-transparent dark:to-${neutral}-800 opacity-70`"></div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="relative isolate px-6 lg:px-8">
      <!-- Gradient Balls -->
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--ui-color-primary-500)] to-[var(--ui-color-primary-300)] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>

      <!-- Content -->
      <div class="mx-auto max-w-2xl py-8 sm:py-12 lg:py-16">
        <div class="relative mx-auto max-w-5xl text-center">
          <!-- Hero Content -->
          <div class="relative z-20">
            <div class="relative">
              <h1 class="text-5xl font-bold tracking-tight text-[var(--ui-color-primary-600)] dark:text-[var(--ui-color-primary-400)] sm:text-6xl md:text-7xl lg:text-8xl">
                <span class="relative mt-2 block">
                  Nuxt Boilerplate
                </span>
              </h1>
              
              <p class="mx-auto mt-2 max-w-4xl text-xl leading-8 text-gray-600 dark:text-gray-300 sm:text-2xl">
                A modern, production-ready template featuring Nuxt 4, Nuxt UI 3, and TailwindCSS. 
                Start your next project with best practices and powerful features out of the box.
              </p>

              <!-- CTA Buttons -->
              <div class="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                  variant="outline"
                  size="xl"
                  class="w-full sm:w-auto"
                  leading-icon="i-simple-icons-github"
                  trailing-icon="i-lucide-external-link"
                  
                >
                  GitHub
                </UButton>
              </div>

              <!-- Tech Logos -->
              <div class="mt-8">
                <p class="text-center text-lg font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Powered by modern technologies
                </p>
                <div class="mt-6 flex flex-wrap items-center justify-center gap-6">
                  <div v-for="tech in technologies" :key="tech.name" class="group flex flex-col items-center">
                    <div class="flex size-24 sm:size-28 transform items-center justify-center rounded-[var(--ui-radius)] bg-[var(--ui-color-primary-50)] p-5 sm:p-6 shadow-lg ring-1 ring-[var(--ui-color-primary-200)] transition duration-300 ease-out group-hover:scale-110 group-hover:bg-[var(--ui-color-primary-100)] group-hover:shadow-xl group-hover:shadow-[var(--ui-color-primary-900)]/20 dark:bg-[var(--ui-color-primary-950)] dark:ring-[var(--ui-color-primary-800)] dark:group-hover:bg-[var(--ui-color-primary-900)]">
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
                      class="mt-0.5 text-xs px-2 py-0.5 rounded-[calc(var(--ui-radius)*0.75)] bg-[var(--ui-color-primary-50)] text-[var(--ui-color-primary-700)] transform transition duration-300 ease-out group-hover:scale-105 dark:bg-[var(--ui-color-primary-950)] dark:text-[var(--ui-color-primary-300)]"
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

      <!-- Bottom Gradient Ball -->
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--ui-color-primary-500)] to-[var(--ui-color-primary-300)] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
    </div>

    <!-- Tech Stack -->
    <div class="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative isolate overflow-hidden bg-[var(--ui-color-primary-50)] px-6 py-12 shadow-2xl dark:bg-[var(--ui-color-primary-950)] sm:rounded-[var(--ui-radius)] sm:px-16 xl:py-16">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),transparent)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.900),transparent)]" />
        <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[var(--ui-color-primary-50)] dark:bg-[var(--ui-color-primary-950)] shadow-xl shadow-primary-600/10 ring-1 ring-[var(--ui-color-primary-200)] dark:ring-[var(--ui-color-primary-800)] sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
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
            <div v-for="feature in features" :key="feature.name" class="group relative rounded-[var(--ui-radius)] bg-[var(--ui-color-primary-50)] p-6 ring-1 ring-[var(--ui-color-primary-200)] transition duration-300 ease-out group-hover:bg-[var(--ui-color-primary-100)] group-hover:shadow-xl group-hover:shadow-[var(--ui-color-primary-900)]/20 dark:bg-[var(--ui-color-primary-950)] dark:ring-[var(--ui-color-primary-800)] dark:group-hover:bg-[var(--ui-color-primary-900)]">
              <dt class="font-semibold text-gray-900 dark:text-white">
                <div class="absolute -left-3 top-5 flex size-7 items-center justify-center rounded-xl bg-primary-100/50 dark:bg-primary-500/10">
                  <UIcon 
                    :name="feature.icon" 
                    class="size-4 text-primary-500 dark:text-primary-400"
                  />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-sm">{{ feature.description }}</dd>
              <div class="mt-3 flex flex-wrap gap-1.5">
                <span v-for="tag in feature.tags" :key="tag" 
                  class="inline-flex items-center rounded-[calc(var(--ui-radius)*0.75rem)] px-2 py-0.5 text-xs font-medium transform transition duration-300 ease-out bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-500 dark:bg-primary-400/10 dark:text-primary-400 dark:ring-primary-400"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </dl>
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
        <div v-for="stat in stats" :key="stat.name" class="group relative rounded-[var(--ui-radius)] bg-[var(--ui-color-primary-50)] p-6 ring-1 ring-[var(--ui-color-primary-200)] transition duration-300 ease-out group-hover:bg-[var(--ui-color-primary-100)] group-hover:shadow-xl group-hover:shadow-[var(--ui-color-primary-900)]/20 dark:bg-[var(--ui-color-primary-950)] dark:ring-[var(--ui-color-primary-800)] dark:group-hover:bg-[var(--ui-color-primary-900)]">
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
    name: 'Modern Stack',
    icon: 'i-heroicons-outline-cube-transparent',
    description:
      'Built with the latest technologies including Nuxt 4, Vue 3, and TypeScript for a robust development experience.',
    tags: ['Nuxt 4', 'Vue 3', 'TypeScript']
  },
  {
    name: 'UI Components',
    icon: 'i-heroicons-outline-squares-2x2',
    description:
      'Powered by Nuxt UI, offering a comprehensive set of ready-to-use components that follow best practices.',
    tags: ['Nuxt UI', 'Components', 'TailwindCSS']
  },
  {
    name: 'Dark Mode',
    icon: 'i-heroicons-outline-moon',
    description:
      'First-class dark mode support with smooth transitions and system preference detection.',
    tags: ['Theme', 'Color Modes', 'Accessibility']
  },
  {
    name: 'Type Safe',
    icon: 'i-heroicons-outline-shield-check',
    description:
      'Full TypeScript support with auto-generated types and Vue macros for an enhanced development experience.',
    tags: ['TypeScript', 'Type Safety', 'DX']
  }
]

const stats = [
  { name: 'Lighthouse Score', value: '100/100' },
  { name: 'Bundle Size', value: '< 100kb' },
  { name: 'Build Time', value: '< 1s' },
  { name: 'Time to Interactive', value: '< 2s' },
]


</script>
