import { defineStore } from 'pinia'
import ApiService from '../http'
import { ref } from 'vue'
import vaccine from '../types/vaccine'

const apiService = new ApiService('')

export const useVaccineStore = defineStore('vaccine', () => {
  const vaccineInfo = ref<vaccine>()
  const vaccineList = ref<any>([])

  const getVaccineById = async (vaccineId: number) => {
    try {
      const res = await apiService.get('/api/vaccines/' + vaccineId)
      vaccineInfo.value = res
    } catch (e) {
      console.log(e)
    }
  }

  const getVaccineList = async (pageNum: number, pageSize: number) => {
    try {
      const res = await apiService.get(
        `/api/vaccines?pageNum=${pageNum}&pageSize=${pageSize}`
      )
      vaccineList.value = res
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }    

  return {
    vaccineInfo,
    vaccineList,
    getVaccineById,
    getVaccineList
  }
})
