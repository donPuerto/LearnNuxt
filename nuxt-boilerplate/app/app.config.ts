export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    rounded: 'rounded-md',
    icons: {
      dark: 'i-heroicons-moon-20-solid',
      light: 'i-heroicons-sun-20-solid',
      arrowLeft: 'i-heroicons-arrow-left-20-solid',
      arrowRight: 'i-heroicons-arrow-right-20-solid',
      check: 'i-heroicons-check-20-solid',
      chevronDoubleLeft: 'i-heroicons-chevron-double-left-20-solid',
      chevronDoubleRight: 'i-heroicons-chevron-double-right-20-solid',
      chevronDown: 'i-heroicons-chevron-down-20-solid',
      chevronLeft: 'i-heroicons-chevron-left-20-solid',
      chevronRight: 'i-heroicons-chevron-right-20-solid',
      chevronUp: 'i-heroicons-chevron-up-20-solid',
      close: 'i-heroicons-x-20-solid',
      info: 'i-heroicons-information-circle-20-solid',
      search: 'i-heroicons-search-20-solid',
    },
    button: {
      default: {
        color: 'gray',
        variant: 'ghost',
        size: 'sm',
      },
    },
  },
  theme: {
    radius: 0.25,
  },
  toaster: {
    position: 'bottom-right',
    expand: true,
    duration: 5000,
  },
})
