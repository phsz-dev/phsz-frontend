import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const logged = ref(false)

  return {
    logged,
    login() {
      logged.value = true
    },
    logout() {
      logged.value = false
    }
  }
})
