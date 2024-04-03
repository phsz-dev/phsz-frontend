<template>
  <PHAuthPanel title="注册" sub-title="欢迎您的首次到来！！">
    <template #default>
      <div class="mx-auto flex w-full flex-col">
        <div class="relative my-2">
          <PHInputField
            id="username"
            v-model="username"
            placeholder="请输入用户名"
            :error-condition="err_situation == 1 || err_situation == 5"
            :error-message="err_message"
          />
          <!-- <label
                for="username"
                class="input-focus-label absolute left-6 top-4 cursor-text text-gray-400 transition-all duration-300 ease-in-out dark:text-gray-200"
                >用户名</label
              > -->
        </div>
        <div class="relative my-1">
          <PHInputField
            v-model="password"
            type="password"
            placeholder="请输入密码"
            :error-condition="err_situation == 2"
            :error-message="err_message"
          />
          <!-- <label
                class="absolute left-6 top-4 text-gray-400 dark:text-gray-200"
                >密码</label
              > -->
        </div>
        <div class="relative my-2">
          <PHInputField
            v-model="confirm_password"
            type="password"
            placeholder="确认密码"
            :error-condition="err_situation == 3 || err_situation == 4 || err_situation == 6"
            :error-message="err_message"
          />
          <!-- <label
              class="absolute left-6 top-4 text-gray-400 dark:text-gray-200"
              >密码</label
            > -->
        </div>
      </div>
    </template>
    <template #footer>
      <RouterLink
        class="mx-2 my-8 w-24 rounded-full p-2 text-center text-sm leading-6 text-primary-600 hover:bg-secondary-50 dark:text-gray-200 hover:dark:bg-zinc-600"
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
import PHInputField from './PHInputField.vue'

import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

import { useUserStore } from '../stores/user'
import router from '../router'
import HTTPError from '../types/error'

const userStore = useUserStore()

const err_situation = ref(0)
const err_message = computed(() => {
  if (err_situation.value == 0) return ''
  return [
    '用户名不能为空',
    '密码不能为空',
    '确认密码不能为空',
    '两次输入的密码不一致',
    '用户名不能重复',
    '服务器错误, 请稍后再试'
  ][err_situation.value - 1]
})

const username = ref('')
const password = ref('')
const confirm_password = ref('')

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
  try {
    await userStore.register(username.value, password.value)
    router.push({
      path: '/login',
      query: {
        username: username.value
      }
    })
  } catch (e) {
    if (e instanceof HTTPError) {
      err_situation.value = 5
    } else {
      err_situation.value = 6
    }
  }
}
</script>

<style scoped></style>
