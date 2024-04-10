import { defineStore } from 'pinia'

import ApiService from '../http'
import { Exam, Paper } from '../types/paper'

const apiService = new ApiService('')

export const usePaperStore = defineStore('paper', () => {
  const getExam = async (id: number, token: string) => {
    // simulate fetching paper from API
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    // return exam
    const exam: Exam = await apiService.get(`/api/test/exam/${id}`, token)
    return exam
  }
  const getPaperInfo = async (id: number) => {
    const paperInfo: Paper = await apiService.get(`/api/test/paper/info/${id}`)
    return paperInfo
  }

  const startExam = async (paperId: number, token: string) => {
    const res: Exam = await apiService.post(`/api/test/exam`, paperId, token)
    return res
  }
  return {
    getExam,
    getPaperInfo,
    startExam
  }
})
