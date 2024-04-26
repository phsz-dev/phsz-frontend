import { defineStore } from 'pinia'
import ApiService from '../http'
import { ref } from 'vue'
import PHScene from '../types/Scene'
import Spot from '../types/Spot'

const apiService = new ApiService('')

export const use3dNavigationStore = defineStore('_3dNavigation', () => {
    const sceneInfo = ref<PHScene[]>()
    const spotInfo = ref<Spot[]>()
    const getAllScene = async () => {
        try {
            const res = await apiService.get('/api/3d/scene/all/noPage')
            sceneInfo.value = res
        } catch (e) {
            console.log(e)
        }
    }

    const getSpotByScene = async (sceneId: number) => {
        try {
            const res = await apiService.get('/api/3d/spot/sceneId?sceneId=' + sceneId)
            spotInfo.value = res
        } catch (e) {
            console.log(e)
        }
    }

    return {
        sceneInfo,
        getAllScene,
        spotInfo,
        getSpotByScene
    }
})