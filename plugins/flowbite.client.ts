import { defineNuxtPlugin } from '#app'
import * as FlowbiteVue from 'flowbite-vue'
import 'flowbite'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(FlowbiteVue)
})