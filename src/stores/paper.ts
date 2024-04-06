import { defineStore } from 'pinia'
import { ref } from 'vue'

import ApiService from '../http'

const apiService = new ApiService('')

export const usePaperStore = defineStore('paper', () => {
  const paper = {
    id: 0,
    name: 'Test Paper',
    time_limit: 60,
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
  const getPaper = async (id: number) => {
    // simulate fetching paper from API
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return paper
  }
  return {
    paper,
    getPaper
  }
})
