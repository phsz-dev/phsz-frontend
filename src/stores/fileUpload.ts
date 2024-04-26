import { defineStore } from 'pinia'
import ApiService from '../http'
import { ref } from 'vue'

const apiService = new ApiService('')

export const useFileUploadStore = defineStore('fileUpload', () => {
    const videoUrl = ref<string>('')
    const uploadImage = async (file: File) => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const res = await apiService.postFile('/oss/image', formData, localStorage.getItem('token')!)
            return res
        } catch (e) {
            console.log(e)
        }
    }

    const uploadVideo = async (file: File) => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const res = await apiService.postFile('/oss/video', formData, localStorage.getItem('token')!)
            videoUrl.value = res;
            return res
        } catch (e) {
            console.log(e)
        }
    }

    return {
        uploadImage,
        uploadVideo,
        videoUrl
    }


})