import { defineStore } from 'pinia'
import ApiService from '../http'
import { ref } from 'vue'
import Assay from '../types/assay'

const apiService = new ApiService('')

export const useAssayStore = defineStore('assay', () => {
  const assayInfo = ref<Assay>()
  const assayList = ref<any>([])

  const getAssayById = async (assayId: number) => {
    try {
      const res = await apiService.get('/api/assays/' + assayId)
      console.log(res)
      assayInfo.value = res
    } catch (e) {
      console.log(e)
    }
  }

  const getAssayList = async (pageNum: number, pageSize: number) => {
    try {
      const res = await apiService.get(
        `/api/assays?pageNum=${pageNum}&pageSize=${pageSize}`,
      )
      assayList.value = res
    } catch (e) {
      console.log(e)
    }
  }

  return {
    assayInfo,
    assayList,
    getAssayById,
    getAssayList,
  }
})
