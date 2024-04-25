import { defineStore } from 'pinia'
import ApiService from '../http'
import { ref } from 'vue'
import Assay from '../types/assay'

const apiService = new ApiService('')

export const useAssayStore = defineStore('assay', () => {
  const assayInfo = ref<Assay>()

  const allAssays = ref<Assay[]>([])

  const getAssayById = async (assayId: number) => {
    try {
      const res = await apiService.get('/api/assays/' + assayId)
      assayInfo.value = res
      return res
    } catch (e) {
      console.log(e)
    }
  }

  const getAllAssays = async () => {
    try {
      const res = await apiService.get('/api/assays?pageSize=100&pageNum=0')
      allAssays.value = res.content
    } catch (e) {
      console.log(e)
    }
  }

  getAllAssays()

  const addAssay = async (assay: Assay) => {
    try {
      const res = await apiService.post('/api/assays', assay)
      return res
    } catch (e) {
      console.log(e)
    }
  }

  return {
    assayInfo,
    allAssays,
    getAssayById,
    addAssay
  }
})
