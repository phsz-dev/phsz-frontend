import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCaseStore = defineStore('case', () => {
  const diseaseCatalog = ref<any[]>([])
  const getDiseaseCatalog = async () => {
    // fetch发起请求
    const res = await fetch('/api/diseases')
    const t = await res.json()
    if(t.code) {
      diseaseCatalog.value = t.data
    }
  }
  return {
    diseaseCatalog,
    getDiseaseCatalog
  }
})
