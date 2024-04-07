<template>
  <div class="w-full px-5 pb-5">
    <div
      class="border-b-2 border-gray-300 py-3 text-lg text-black dark:border-zinc-500 dark:text-gray-200"
    >
      编辑信息
    </div>
    <div class="px-4">
      <div class="h-full w-full text-center">
        <img 
          :src="userStore.avatar || '../assets/profile/default_avatar.jpg'"
          class="mx-auto mt-6 h-40 w-40 rounded-full border border-gray-300 hover:cursor-pointer"
          @click="chooseFile"
        />
        <div class="mt-6 text-sm text-secondary-500 hover:cursor-pointer" @click="chooseFile">
          修改头像
        </div>
        <input type="file" style="display:none;" ref="fileInput" @change="uploadFile">
      </div>
      <div class="my-5 flex h-10 flex-row">
        <div
          class="text-md h-10 w-20 py-1 leading-8 text-gray-600 dark:text-gray-400"
        >
          用户名
        </div>
        <div
          class="text-md h-10 w-20 py-1 leading-8 text-black dark:text-gray-200"
        >
          {{ userStore.username }}
        </div>
      </div>
      <div class="my-5 flex h-10 flex-row">
        <div
          class="text-md h-10 w-20 py-1 leading-8 text-gray-600 dark:text-gray-400"
        >
          邮箱
        </div>
        <input
          type="email"
          class="h-10 flex-1 rounded-md border border-gray-300 px-2 text-sm dark:bg-gray-600"
          placeholder="请输入邮箱"
          v-model="email"
        />
      </div>
      <div class="my-5 flex h-10 flex-row">
        <div
          class="text-md h-10 w-20 py-1 leading-8 text-gray-600 dark:text-gray-400"
        >
          权限
        </div>
        <div
          class="text-md h-10 w-20 py-1 leading-8 text-black dark:text-gray-200"
        >
          {{ roles[userStore.roles.length] }}
        </div>
      </div>
    </div>
    <div class="w-full text-center">
      <button
        class="mx-auto h-10 w-20 rounded-md border-2 border-secondary-500 text-secondary-500 hover:border-secondary-400 hover:text-secondary-400 hover:shadow-md"
        @click="updateUserInfo"
      >
        保存
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
const email = ref(userStore.email)
watch(
  () => userStore.email,
  (newVal) => {
    email.value = newVal
  }
)

const fileInput = ref<HTMLInputElement | null>(null)

const chooseFile = () => {
  fileInput.value?.click()

}

const uploadFile = async () => {
  if (fileInput.value?.files) {
    const file = fileInput.value.files[0]
    await userStore.uploadAvatar(file)
  }
}

const updateUserInfo = async () => {
  await userStore.updateUserInfo(email.value)
  userStore.hydrate()
}

const roles = ['普通用户', '管理员', '超级管理员']
</script>
