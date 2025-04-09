// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Loan Origination System',
      meta: [
        { name: 'description', content: 'A loan origination system for reviewing and processing loan applications' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  build: {
    transpile: ['flowbite-vue']
  }
})