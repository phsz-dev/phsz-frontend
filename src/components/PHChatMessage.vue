<template>
  <div v-if="type == 'user'" class="mb-4 flex justify-end">
    <div class="ml-14 mr-2 rounded-lg bg-primary-600 p-4">
      <p class="text-white">{{ text }}</p>
    </div>
    <img
      :src="userStore.avatar || default_avatar"
      alt="User"
      class="mt-2 h-8 w-8 rounded-full"
    />
  </div>
  <div v-else class="flex mb-4">
      <img src="../assets/chat/gpt.png" alt="ChatGPT" class="w-8 h-8 rounded-full mt-2">
      <div class="bg-gray-100 rounded-lg p-4 ml-2 mr-14">
        <p>{{ text }}</p>
      </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'user' | 'bot'
  text: string
}>()

import { useUserStore } from '../stores/user'
import default_avatar from '../assets/profile/default_avatar.jpg'
const userStore = useUserStore()
</script>
