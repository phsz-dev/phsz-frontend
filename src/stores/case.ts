import { defineStore } from 'pinia'
import { ref } from 'vue'
import ApiService from '../http'
import Case from '../types/Case'

const apiService = new ApiService('')

export const useCaseStore = defineStore('case', () => {
  const diseaseCatalog = ref<any[]>([])
  const roughCases = ref<any>([])
  const detailedCase = ref<Case>()
  const getDiseaseCatalog = async () => {
    try {
      const res = await apiService.get('/api/diseases')
      diseaseCatalog.value = res
    } catch (e) {
      console.log(e)
    }
  }
  const getRoughCaseByDisease = async (
    diseaseId: number,
    pageNum: number,
    pageSize: number
  ) => {
    try {
      const res = await apiService.get(
        '/api/cases/disease?diseaseId=' +
          diseaseId +
          '&pageSize=' +
          pageSize +
          '&pageNum=' +
          pageNum
      )
      // console.log(res)
      roughCases.value = res
    } catch (e) {
      console.log(e)
    }
  }
  const getDetailedCase = async (caseId: number) => {
    try {
      const res = await apiService.get('/api/cases/' + caseId)
      console.log(res)
      detailedCase.value = res
    } catch (e) {
      console.log(e)
    }
  }
  return {
    diseaseCatalog,
    roughCases,
    detailedCase,
    getDiseaseCatalog,
    getRoughCaseByDisease,
    getDetailedCase
  }
})
