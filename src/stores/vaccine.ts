import { defineStore } from 'pinia'
import ApiService from '../http'
import {ref} from 'vue'
import vaccine from '../types/vaccine'

const apiService = new ApiService('')

export const useVaccineStore = defineStore('vaccine', () => {
  const vaccineInfo = ref<vaccine>()
  
  const getVaccineById = async (vaccineId:number) =>{
    try{
        const res = await apiService.get('/api/vaccines/'+vaccineId);
        console.log(res)
        vaccineInfo.value = res
    }catch(e){
        console.log(e)
    }
  }

  return {
    vaccineInfo,
    getVaccineById
  }
})
