export const useSEO = () => {
  const config = useRuntimeConfig()
  
  const defaultMeta = {
    title: 'Nuxt Boilerplate',
    description: 'A modern Nuxt 3 boilerplate with comprehensive SEO setup',
    ogImage: '/og-image.jpg', // Add your Open Graph image
  }

  const setMeta = (meta: Partial<typeof defaultMeta>) => {
    const finalMeta = { ...defaultMeta, ...meta }
    
    useHead({
      title: finalMeta.title,
      meta: [
        { name: 'description', content: finalMeta.description },
        // Open Graph
        { property: 'og:title', content: finalMeta.title },
        { property: 'og:description', content: finalMeta.description },
        { property: 'og:image', content: finalMeta.ogImage },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: finalMeta.title },
        { name: 'twitter:description', content: finalMeta.description },
        { name: 'twitter:image', content: finalMeta.ogImage },
      ],
    })
  }

  return {
    setMeta,
  }
}
