import { defineStore } from 'pinia'
import { ref } from 'vue'
import ApiService from '../http'

const apiService = new ApiService('')

export const useCaseStore = defineStore('case', () => {
  const diseaseCatalog = ref<any[]>([])
  const getDiseaseCatalog = async () => {
    const res = await apiService.get('/api/diseases')
    diseaseCatalog.value = res
  }
  return {
    diseaseCatalog,
    getDiseaseCatalog
  }
})
