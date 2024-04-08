import { defineStore } from 'pinia'
import ApiService from '../http'
import {ref} from 'vue'
import medicine from '../types/medicine'

const apiService = new ApiService('')

export const useMedicineStore = defineStore('case', () => {
  const medicineInfo = ref<medicine>()
  
  const getMedicineById = async (medicineId:number) =>{
    try{
        const res = await apiService.get('/api/medicines/'+medicineId);
        console.log(res)
        medicineInfo.value = res
    }catch(e){
        console.log(e)
    }
  }

  return {
    medicineInfo,
    getMedicineById
  }
})
