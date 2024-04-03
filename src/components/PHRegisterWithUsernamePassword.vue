<template>
    <PHAuthPanel title="注册" sub-title="欢迎您的首次到来！！">
      <template #default>
        <div class="mx-auto flex w-full flex-col">
          <div class="relative my-2">
            <input
              id="username"
              type="text"
              class="h-30 w-full rounded-md border bg-transparent px-4 py-4 text-black outline-none placeholder:text-gray-400 focus:border-2 focus:border-primary-600 focus:ring-0 dark:text-gray-200 placeholder:dark:text-gray-200"
              placeholder="请输入用户名"
              v-model="username"
              :class="err_situation == 1|| err_situation == 5 ? 'border-red-500' : 'border-zinc-500'"
            />
            <div class="ml-2 mt-1 text-sm text-red-500" v-if="err_situation == 1">
              用户名不能为空
            </div>
            <div class="ml-2 mt-1 text-sm text-red-500" v-if="err_situation == 5">
              用户名不能重复
            </div>
            <!-- <label
                for="username"
                class="input-focus-label absolute left-6 top-4 cursor-text text-gray-400 transition-all duration-300 ease-in-out dark:text-gray-200"
                >用户名</label
              > -->
          </div>
          <div class="relative my-1">
            <input
              type="password"
              class="h-30 w-full rounded-md border bg-transparent px-4 py-4 text-black outline-none placeholder:text-gray-400 focus:border-2 focus:border-primary-600 dark:text-gray-200 placeholder:dark:text-gray-200"
              placeholder="请输入密码"
              v-model="password"
              :class="err_situation == 2 ? 'border-red-500' : 'border-zinc-500'"
            />
            <div class="ml-2 mt-1 text-sm text-red-500" v-if="err_situation == 2">
              密码不能为空
            </div>
            <!-- <label
                class="absolute left-6 top-4 text-gray-400 dark:text-gray-200"
                >密码</label
              > -->
          </div>
          <div class="relative my-2">
            <input
              type="password"
              class="h-30 w-full rounded-md border bg-transparent px-4 py-4 text-black outline-none placeholder:text-gray-400 focus:border-2 focus:border-primary-600 dark:text-gray-200 placeholder:dark:text-gray-200"
              placeholder="确认密码"
              v-model="confirm_password"
              :class="
                err_situation == 3 || err_situation == 4
                  ? 'border-red-500'
                  : 'border-zinc-500'
              "
            />
            <div
              class="ml-2 mt-1 text-sm text-red-500"
              v-if="err_situation == 3"
            >
              确认密码不能为空
            </div>
            <div
              class="ml-2 mt-1 text-sm text-red-500"
              v-if="err_situation == 4"
            >
              两次输入的密码不一致
            </div>
            <!-- <label
              class="absolute left-6 top-4 text-gray-400 dark:text-gray-200"
              >密码</label
            > -->
          </div>
        </div>
      </template>
      <template #footer>
        <RouterLink
          class="mx-2 my-8 w-24 leading-6 text-center rounded-full p-2 text-sm text-primary-600 hover:bg-secondary-50 dark:text-gray-200 hover:dark:bg-zinc-600"
        to="/login"
        >
          前往登录
        </RouterLink>
        <button
          class="mx-2 my-8 w-24 rounded-full bg-primary-600 p-2 text-white hover:shadow-lg dark:text-gray-200"
          @click="register"
        >
          下一步
        </button>
      </template>
    </PHAuthPanel>
  </template>
  
  <script setup lang="ts">
  import PHAuthPanel from './PHAuthPanel.vue'
  import { useUserStore } from '../stores/user'
  import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import router from '../router';
  const userStore = useUserStore()
  const register = async () => {
      // 模拟注册
      if (username.value == '') {
        err_situation.value = 1
        return
      }
      if (password.value == '') {
        err_situation.value = 2
        return
      }
      if (confirm_password.value == '') {
        err_situation.value = 3
        return
      }
      if (password.value != confirm_password.value) {
        err_situation.value = 4
        return
      }
      const t = await userStore.register(username.value, password.value)
      if(t == "true"){
        router.push({
            path: '/login',
            query: {
                username: username.value
            }
        })
      }else{
        err_situation.value = 5
      }
  }
  const err_situation = ref(0)
  const username = ref('')
  const password = ref('')
const confirm_password = ref('')
  </script>
  
  <style scoped></style>
  