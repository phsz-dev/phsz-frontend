import { defineStore } from 'pinia'
import { ref } from 'vue'

import ApiService from '../http'
import { Exam } from '../types/paper'

const apiService = new ApiService('')

export const usePaperStore = defineStore('paper', () => {
  const exam : Exam = {
    id: 0,
    name: 'Test Exam',
    startTime: '2024-04-07 02:35:08.113',
    endTime: '2024-04-07 10:23:42',
    paper: {
      id: 0,
      name: 'Test Paper',
      durationSeconds: 60,
      score: 100,
      questions: [
        {
          id: 1,
          text: 'What is the capital of France?',
          type: 'mcq',
          options: [
            { id: 1, text: 'Paris' },
            { id: 2, text: 'London' },
            { id: 3, text: 'Berlin' }
          ]
        },
        {
          id: 2,
          text: 'What is 2 + 2?',
          type: 'text'
        },
        {
          id: 3,
          text: 'What is the capital of Germany?',
          type: 'mcq',
          options: [
            { id: 1, text: 'Paris' },
            { id: 2, text: 'London' },
            { id: 3, text: 'Berlin' }
          ]
        },
        {
          id: 4,
          text: 'What is the capital of the United Kingdom?',
          type: 'mcq',
          options: [
            { id: 1, text: 'Paris' },
            { id: 2, text: 'London' },
            { id: 3, text: 'Berlin' }
          ]
        }
      ]
    }
  }
  const getExam = async (id: number) => {
    // simulate fetching paper from API
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return exam
  }
  return {
    exam,
    getExam
  }
})
