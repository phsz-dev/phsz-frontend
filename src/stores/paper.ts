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

  const saveAnswer = async (
    examinationId: number,
    questionId: number,
    answer: string | number,
    token: string
  ) => {
    const res = await apiService.post(
      `/api/test/exam/answer`,
      {
        examinationId,
        questionId,
        answer
      },
      token
    )
    return res
  }

  const submitExam = async (examinationId: number, token: string) => {
    const res = await apiService.put(`/api/test/exam/end`, examinationId, token)
    return res
  }

  const getAllQuestions = async () => {
    const res = await apiService.get(`/api/test/question?pageNum=0&pageSize=1000`)
    return res.content
  }

  return {
    getExam,
    getPaperInfo,
    startExam,
    saveAnswer,
    submitExam,
    getAllQuestions
  }
})
