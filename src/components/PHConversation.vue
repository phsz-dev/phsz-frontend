<template>
  <div class="flex h-16 items-center bg-primary-500 p-4">
    <span class="phi-left-arrow size-6 cursor-pointer bg-white"></span>
    <img
      src="../assets/chat/gpt.png"
      alt="ChatGPT"
      class="ml-2 h-8 w-8 rounded-full"
    />
    <span class="ml-2 font-bold text-white">AGI 助教</span>
  </div>
  <div ref="chat" class="h-[512px] overflow-y-scroll p-4">
    <PHChatMessage
      v-for="message in messages"
      :key="message.id"
      :type="message.type"
      :text="message.text"
    />
  </div>
  <div class="flex h-16 items-center justify-center bg-gray-100 p-4">
    <input
      v-model="inputText"
      type="text"
      class="h-10 w-full rounded-full bg-gray-200 p-4 focus:outline-none"
      placeholder="请输入..."
      @keyup.enter="send"
    />
    <span
      class="phi-send ml-2 size-6 cursor-pointer bg-primary-500 text-white"
      @click="send"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import PHChatMessage from './PHChatMessage.vue'

const messages = reactive<
  {
    id: number
    type: 'user' | 'bot'
    text: string
  }[]
>([
  {
    id: 0,
    type: 'bot',
    text: '你好，我是宠物医院特化版 GPT，有什么需要帮助的吗？'
  },
  {
    id: 1,
    type: 'user',
    text: '怎么启动原神'
  },
  {
    id: 2,
    type: 'user',
    text: '怎么启动原神啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
  }
])

const inputText = ref('')
const chat = ref<HTMLElement | null>(null)

const scrollToBottom = () => {
  chat.value?.scrollTo(0, chat.value.scrollHeight)
}

const send = () => {
  if (!inputText.value) return
  messages.push({
    id: messages.length,
    type: 'user',
    text: inputText.value
  })
  inputText.value = ''
  setTimeout(scrollToBottom, 0)
}
</script>
