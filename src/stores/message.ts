import { defineStore } from 'pinia'
import {ref} from 'vue'
import message from '../types/message'

export const useMessageStore = defineStore('message', () => {
    const messageQueue = ref<message[][]>([[],[],[],[],[],[]])

    const addMessage = (message:message) =>{
        message.endTime = Date.now() + message.showTime
        messageQueue.value[calculatePosition(message.position)].push(message)
        messageQueue.value = [...messageQueue.value];
        // 设置定时器，在showTime后自动移除消息
        setTimeout(() => {
            removeMessage(message);
        }, message.showTime);
    }

    const removeMessage = (messageToRemove: message) => {
        const index = messageQueue.value[calculatePosition(messageToRemove.position)].findIndex(message => message.endTime === messageToRemove.endTime);
        if (index !== -1) {
            messageQueue.value[calculatePosition(messageToRemove.position)].splice(index, 1);
            // 由于直接修改了数组，这里手动触发响应式更新
            messageQueue.value = [...messageQueue.value];
        }
    };

    const clearMessage = () => {
        messageQueue.value = []
    }

    const calculatePosition = (position:string) => {
        switch(position){
            case 'topleft': return 0
            case 'top': return 1
            case 'top-right': return 2
            case 'bottom-left': return 3
            case 'bottom': return 4
            case 'bottom-right': return 5
            default: return 0
        }
    }

    return {
        messageQueue,
        addMessage,
        removeMessage,
        clearMessage
    }
    
    
})
