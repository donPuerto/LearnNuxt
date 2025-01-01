export default defineNuxtPlugin((nuxtApp) => {
  const { showConfetti } = useConfetti()
  
  return {
    provide: {
      confetti: showConfetti
    }
  }
})
