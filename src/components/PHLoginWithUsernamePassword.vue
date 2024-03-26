<template>
  <div class="mx-auto flex max-w-md flex-col py-4">
    <input
      type="text"
      class="my-2 border-b-2 border-b-gray-600 bg-transparent p-4 text-gray-600 outline-none placeholder:text-gray-600 dark:border-b-gray-200 dark:text-gray-200 placeholder:dark:text-gray-200"
      placeholder="请输入用户名"
    />
    <input
      type="password"
      class="my-2 border-b-2 border-b-gray-600 bg-transparent p-4 text-gray-600 outline-none placeholder:text-gray-600 dark:border-b-gray-200 dark:text-gray-200 placeholder:dark:text-gray-200"
      placeholder="请输入密码"
    />
    <button
      class="mx-auto my-8 w-56 rounded-full bg-primary-500 p-3 text-white dark:!bg-dark-block-600 dark:text-gray-200"
      @click="login"
    >
      登录
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
const login = () => {
  // 模拟登录
  userStore.login()
}
</script>
