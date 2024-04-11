import { defineStore } from 'pinia'
import ApiService from '../http'
import { ref } from 'vue'
import Vaccine from '../types/Vaccine'

const apiService = new ApiService('')

export const useVaccineStore = defineStore('vaccine', () => {
  const vaccineInfo = ref<Vaccine>()

  const getVaccineById = async (vaccineId: number) => {
    try {
      const res = await apiService.get('/api/vaccines/' + vaccineId)
      vaccineInfo.value = res
    } catch (e) {
      console.log(e)
    }
  } 

  return {
    vaccineInfo,
    getVaccineById
  }
})
