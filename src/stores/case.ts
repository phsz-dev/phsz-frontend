import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCaseStore = defineStore('case', () => {
  let diseaseCatalog = reactive<any[]>([])
  const getDiseaseCatalog = async () => {
    // fetch发起请求
    const res = await fetch('/api/diseases')
    diseaseCatalog = await res.json()
  }
  return {
    diseaseCatalog,
    getDiseaseCatalog
  }
})
