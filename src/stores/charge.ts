import { defineStore } from 'pinia'
import { ref } from 'vue'
import Charge from '../types/Charge'
import ApiService from '../http'

const apiService = new ApiService('')

export const useChargeStore = defineStore('charge', () => {

    const chargeItem = ref<Charge>()
    const chargeList = ref<Charge[]>([])

    const getChargeById = async (chargeId: number) => {
        try {
            const res = await apiService.get('/api/charges/' + chargeId)
            console.log(res)
            chargeItem.value = res
            return res
        } catch (e) {
            console.log(e)
        }
    }




    return {
        chargeItem,
        getChargeById
    }

})