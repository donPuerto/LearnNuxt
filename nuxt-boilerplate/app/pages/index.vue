<template>
  <main class="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -left-1/2 top-0 h-[1000px] w-[1000px] rotate-12 rounded-full bg-gradient-to-br from-primary-400/30 to-purple-400/30 blur-3xl dark:from-primary-600/20 dark:to-purple-600/20"></div>
      <div class="absolute -right-1/2 bottom-0 h-[1000px] w-[1000px] rotate-12 rounded-full bg-gradient-to-br from-blue-400/30 to-primary-400/30 blur-3xl dark:from-blue-600/20 dark:to-primary-600/20"></div>
    </div>

    <!-- Hero Section -->
    <div class="relative">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="relative mx-auto max-w-[90rem] py-20 sm:py-24 lg:py-32">
          <!-- Announcement Banner -->
          <div class="absolute left-1/2 top-0 -translate-x-1/2 transform">
            <div class="flex items-center gap-x-6 bg-primary-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 sm:after:flex-1">
              <p class="text-sm leading-6 text-white">
                <a href="#">
                  <strong class="font-semibold">Announcing our next generation boilerplate</strong>
                  <svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>

          <div class="relative mx-auto max-w-5xl pt-20 text-center">
            <!-- Hero Content -->
            <div class="relative z-20">
              <div class="relative">
                <div class="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                  <div class="flex items-center space-x-2 rounded-full bg-primary-500/10 px-4 py-1 text-sm font-medium text-primary-600 ring-1 ring-inset ring-primary-500/20 dark:bg-primary-400/10 dark:text-primary-400 dark:ring-primary-400/20">
                    <UIcon name="i-lucide-sparkles" class="size-4" />
                    <span>New Features</span>
                  </div>
                </div>
                <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  <span class="relative mt-4 block bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Nuxt Boilerplate
                  </span>
                  <span class="mt-4 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    The Modern Development Stack
                  </span>
                </h1>
              </div>
              <p class="mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300 sm:text-2xl">
                A modern, production-ready template featuring Nuxt 4, Nuxt UI 3, and TailwindCSS. 
                Start your next project with best practices and powerful features out of the box.
              </p>

              <!-- CTA Buttons -->
              <div class="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
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
              <div class="mt-20">
                <p class="text-center text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Powered by modern technologies
                </p>
                <div class="mt-8 flex flex-wrap items-center justify-center gap-8">
                  <div v-for="tech in technologies" :key="tech.name" class="group flex flex-col items-center">
                    <div class="flex size-16 items-center justify-center rounded-xl bg-white/5 p-2 shadow-lg ring-1 ring-gray-900/10 transition duration-200 group-hover:bg-white/10 group-hover:shadow-gray-900/20 dark:bg-white/5 dark:ring-white/10 dark:group-hover:bg-white/10">
                      <UIcon :name="tech.icon" class="size-10 text-gray-900 dark:text-white" />
                    </div>
                    <span class="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="mx-auto mt-8 max-w-7xl px-4 sm:mt-16 sm:px-6 lg:mt-24 lg:px-8">
          <div class="relative isolate overflow-hidden bg-white/50 px-6 py-24 shadow-2xl dark:bg-white/5 sm:rounded-3xl sm:px-24 xl:py-32">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
              <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:gap-y-16">
                <div v-for="feature in features" :key="feature.name" class="group relative rounded-2xl bg-white/50 p-6 transition duration-200 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10">
                  <dt class="font-semibold text-gray-900 dark:text-white">
                    <div class="absolute -left-3 top-6 flex size-8 items-center justify-center rounded-lg bg-primary-600/10 dark:bg-primary-400/10">
                      <UIcon 
                        :name="feature.icon" 
                        class="size-5 text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    {{ feature.name }}
                  </dt>
                  <dd class="mt-2">{{ feature.description }}</dd>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span v-for="tag in feature.tags" :key="tag" class="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/10 dark:bg-primary-400/10 dark:text-primary-400 dark:ring-primary-400/20">
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
        <div class="mx-auto mt-32 max-w-7xl px-4 sm:mt-40 sm:px-6 lg:mt-48 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Built for Performance
            </h2>
            <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
              Our boilerplate is optimized for speed, developer experience, and production readiness.
            </p>
          </div>
          <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.name" class="group relative flex flex-col gap-y-3 overflow-hidden rounded-2xl bg-white/50 p-6 transition duration-200 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10">
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
const technologies = [
  { name: 'Vue', icon: 'i-simple-icons-vuedotjs' },
  { name: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs' },
  { name: 'Tailwind', icon: 'i-simple-icons-tailwindcss' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { name: 'Vite', icon: 'i-simple-icons-vite' },
]

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
