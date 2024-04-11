import { defineStore } from 'pinia'
import ApiService from '../http'
import { ref } from 'vue'
import Vaccine from '../types/vaccine'

const apiService = new ApiService('')

export const useVaccineStore = defineStore('vaccine', () => {
  const vaccineInfo = ref<Vaccine>()

  const allVaccines = ref<Vaccine[]>([])

  const getVaccineById = async (vaccineId: number) => {
    try {
      const res = await apiService.get('/api/vaccines/' + vaccineId)
      vaccineInfo.value = res
      return res
    } catch (e) {
      console.log(e)
    }
  }

  const getAllVaccines = async () => {
    try {
      const res = await apiService.get('/api/vaccines?pageSize=100&pageNum=0')
      allVaccines.value = res.content
    } catch (e) {
      console.log(e)
    }
  }

  getAllVaccines()

  return {
    vaccineInfo,
    allVaccines,
    getVaccineById
  }
})
