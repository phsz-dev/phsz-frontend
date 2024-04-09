import { defineStore } from 'pinia'
import ApiService from '../http'
import {ref} from 'vue'
import assay from '../types/assay'

const apiService = new ApiService('')

export const useAssayStore = defineStore('assay', () => {
  const assayInfo = ref<assay>()
  
  const getAssayById = async (assayId:number) =>{
    try{
        const res = await apiService.get('/api/assays/'+assayId);
        console.log(res)
        assayInfo.value = res
    }catch(e){
        console.log(e)
    }
  }

  return {
    assayInfo,
    getAssayById
  }
})
