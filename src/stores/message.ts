import { defineStore } from 'pinia'
import { reactive } from 'vue'
import Message from '../types/Message'

export const useMessageStore = defineStore('message', () => {
  const messageQueue = reactive<Message[][]>([[], [], [], [], [], []])

  const addMessage = (message: Message) => {
    message.endTime = Date.now() + message.showTime
    messageQueue[calculatePosition(message.position)].push(message)
    setTimeout(() => {
      removeMessage(message)
    }, message.showTime)
  }

  const removeMessage = (messageToRemove: Message) => {
    const index = messageQueue[
      calculatePosition(messageToRemove.position)
    ].findIndex((message) => message.endTime === messageToRemove.endTime)
    if (index !== -1) {
      messageQueue[calculatePosition(messageToRemove.position)].splice(index, 1)
    }
  }

  const clearMessage = () => {
    messageQueue.forEach((position) => {
      position.splice(0, position.length)
    })
  }

  const calculatePosition = (position: string) => {
    switch (position) {
      case 'topleft':
        return 0
      case 'top':
        return 1
      case 'top-right':
        return 2
      case 'bottom-left':
        return 3
      case 'bottom':
        return 4
      case 'bottom-right':
        return 5
      default:
        return 0
    }
  }

  return {
    messageQueue,
    addMessage,
    removeMessage,
    clearMessage
  }
})
