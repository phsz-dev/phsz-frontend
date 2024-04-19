<template>
  <div class="flex flex-col">
    <button @click="addMessage('left-top', 'success')">在左上加通知</button>
    <button @click="addMessage('top', 'success')">在上方加通知</button>
    <button @click="addMessage('top-right', 'success')">在右上加通知</button>
    <button @click="addMessage('bottom-left', 'warn')">在左下加通知</button>
    <button @click="addMessage('bottom', 'error')">在下方加通知</button>
    <button @click="addMessage('bottom-right', 'normal')">在右下加通知</button>
    <button @click="store.clearMessage">清空通知</button>
    <button @click="addDialogue">加入弹窗</button>
  </div>
  

</template>

<script setup lang="ts">
import { useMessageStore } from '../stores/message'
import { useDialogueStore } from '../stores/dialogue';
import Message from '../types/message.ts'
const store = useMessageStore()
const dialogueStore = useDialogueStore()

const addMessage = (position: string, type: string) => {
  store.addMessage(Message.fullMessage('这是一条消息', 1000, type, position))
}

const addDialogue = () => {
  dialogueStore.showDialogue({
    title: '这是一个弹窗',
    content: '这是弹窗的内容',
    showCancel: true,
    clickMaskClose: true,
    confirm: () => {
      console.log('点击了确定')
      dialogueStore.closeDialogue()
    },
    cancel: () => {
      console.log('点击了取消')
      dialogueStore.closeDialogue()
    }
  })
}
</script>
