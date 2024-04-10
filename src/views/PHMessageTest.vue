<template>
  <button @click="addMessage('left-top', 'success')">在左上加通知</button>
  <button @click="addMessage('top', 'success')">在上方加通知</button>
  <button @click="addMessage('top-right', 'success')">在右上加通知</button>
  <button @click="addMessage('bottom-left', 'warn')">在左下加通知</button>
  <button @click="addMessage('bottom', 'error')">在下方加通知</button>
  <button @click="addMessage('bottom-right', 'normal')">在右下加通知</button>
  <button @click="store.clearMessage">清空通知</button>
</template>

<script setup lang="ts">
import { useMessageStore } from '../stores/message'
import Message from '../types/message.ts'
const store = useMessageStore()

const addMessage = (position: string, type: string) => {
  store.addMessage(Message.fullMessage('这是一条消息', 1000, type, position))
}
</script>
