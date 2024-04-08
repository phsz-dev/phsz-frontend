import { defineStore } from 'pinia'
import { ref } from 'vue'
import ApiService from '../http'
import Case from '../types/Case'
import Page from '../types/Page'
import RoughCase from '../types/RoughCase'

const apiService = new ApiService('')

export const useCaseStore = defineStore('case', () => {
  const diseaseCatalog = ref<any[]>([])
  const roughCases = ref<Page<RoughCase>>()
  const detailedCase = ref<Case>()
  const currentIndex = ref<number>(0)
  const chargeList = ref<any>([])
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
      console.log(res)
      roughCases.value = res
    } catch (e) {
      console.log(e)
    }
  }
  const getDetailedCase = async (caseId: number) => {
    try {
      const res = await apiService.get('/api/cases/' + caseId)
      console.log(res)
      const res2 = await apiService.get('/api/charges/' + res.chargeId)
      console.log(res2)
      detailedCase.value = res
      chargeList.value = res2
    } catch (e) {
      console.log(e)
    }
  }
  return {
    diseaseCatalog,
    roughCases,
    detailedCase,
    currentIndex,
    chargeList,
    getDiseaseCatalog,
    getRoughCaseByDisease,
    getDetailedCase
  }
})
