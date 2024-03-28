<template>
  <div
    class="relative mx-auto flex h-[32rem] max-w-5xl flex-col rounded-3xl bg-white p-8 2xl:w-[72rem] dark:bg-dark-block-600"
  >
    <div class="py-8 text-4xl"><PHLogo /></div>
    <div class="flex h-full flex-row">
      <div class="flex-auto">
        <div class="text-4xl text-black dark:text-gray-200">
          {{ loginPageStatus == 0 ? '登录' : '注册' }}
        </div>
        <div class="text-md py-4 text-black dark:text-gray-200">
          欢迎您的到来！！
        </div>
      </div>

      <div class="relative flex-auto">
        <div class="mx-auto flex w-full flex-col">
          <div class="relative my-2">
            <input
              id="username"
              type="text"
              class="h-30 w-full rounded-md border border-zinc-500 bg-transparent px-4 py-4 text-black outline-none placeholder:text-gray-400 focus:border-2 focus:border-primary-600 focus:ring-0 dark:text-gray-200 placeholder:dark:text-gray-200"
              :placeholder="
                '请输入' + (loginPageStatus == 0 ? '用户名/邮箱' : '用户名')
              "
            />
            <!-- <label
              for="username"
              class="input-focus-label absolute left-6 top-4 cursor-text text-gray-400 transition-all duration-300 ease-in-out dark:text-gray-200"
              >用户名</label
            > -->
          </div>
          <div class="relative my-2">
            <input
              type="password"
              class="h-30 w-full rounded-md border border-zinc-500 border-b-gray-400 bg-transparent px-4 py-4 text-black outline-none placeholder:text-gray-400 focus:border-2 focus:border-primary-600 dark:text-gray-200 placeholder:dark:text-gray-200"
              placeholder="请输入密码"
            />
            <!-- <label
              class="absolute left-6 top-4 text-gray-400 dark:text-gray-200"
              >密码</label
            > -->
          </div>
          <div class="relative my-2" v-if="loginPageStatus">
            <input
              type="password"
              class="h-30 w-full rounded-md border border-zinc-500 border-b-gray-400 bg-transparent px-4 py-4 text-black outline-none placeholder:text-gray-400 focus:border-2 focus:border-primary-600 dark:text-gray-200 placeholder:dark:text-gray-200"
              placeholder="确认密码"
            />
            <!-- <label
              class="absolute left-6 top-4 text-gray-400 dark:text-gray-200"
              >密码</label
            > -->
          </div>
        </div>
        <div class="absolute bottom-0 right-0 flex flex-row">
          <button
            class="mx-2 my-8 w-24 rounded-full p-2 text-sm text-primary-600 hover:bg-secondary-50 dark:text-gray-200 hover:dark:bg-zinc-600"
            @click="loginPageStatus = 1 - loginPageStatus"
          >
            {{ loginPageStatus == 0 ? '创建账户' : '前往登录' }}
          </button>
          <button
            class="mx-2 my-8 w-24 rounded-full bg-primary-600 p-2 text-white hover:shadow-lg dark:text-gray-200"
            @click="login"
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { ref } from 'vue'
import PHLogo from './PHLogo.vue'
const userStore = useUserStore()
const login = () => {
  // 模拟登录
  userStore.login()
}
const loginPageStatus = ref(0)
</script>

<style scoped></style>
