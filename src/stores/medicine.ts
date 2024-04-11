import { defineStore } from 'pinia'
import ApiService from '../http'
import { ref } from 'vue'
import Medicine from '../types/medicine'

const apiService = new ApiService('')

export const useMedicineStore = defineStore('medicine', () => {
  const medicineInfo = ref<Medicine>()

  const allMedicines = ref<Medicine[]>([])

  const getMedicineById = async (medicineId: number) => {
    try {
      const res = await apiService.get('/api/medicines/' + medicineId)
      console.log(res)
      medicineInfo.value = res
      return res
    } catch (e) {
      console.log(e)
    }
  }

  const getAllMedicines = async () => {
    try {
      const res = await apiService.get('/api/medicines?pageSize=100&pageNum=0')
      console.log(res)
      allMedicines.value = res.content
    } catch (e) {
      console.log(e)
    }
  }

  getAllMedicines()

  return {
    medicineInfo,
    allMedicines,
    getMedicineById,
  }
})
