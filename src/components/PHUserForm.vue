<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <PHFormInput 
          v-model="username"
          name="username" 
          label="用户名" 
          type="text" 
          placeholder="请输入用户名"
          autocomplete="username"
        />

        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-full">
            <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">头像
            </label>
            <div class="mt-2 flex items-center gap-x-3">
              <img class="h-12 w-12 text-gray-300 rounded-full" aria-hidden="true" :src="avatar || defaultAvatar"/>
              <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" @click="chooseFile">更换头像</button>
              <input
                ref="fileInput"
                type="file"
                style="display: none"
                @change="uploadFile"
              />
            </div>
          </div>
        </div>

        <PHFormInput 
          v-model="password"
          name="password" 
          label="密码" 
          type="password" 
          placeholder="请输入密码"
          autocomplete="new-password"
        />

        <PHFormInput 
          v-model="confirmPassword"
          name="confirm_password" 
          label="确认密码" 
          type="password" 
          placeholder="确认密码"
          autocomplete="current-password"
        />

        <PHFormInput 
          v-model="email"
          name="email" 
          label="邮箱" 
          type="email" 
          placeholder="请输入邮箱"
          autocomplete="email"
        />

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">权限</legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="user" v-model="user" name="user" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="user" class="font-medium text-gray-900">普通用户</label>
                  <p class="text-gray-500">宠物医院实习生，在平台中浏览和学习。</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="admin" v-model="admin" name="admin" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="admin" class="font-medium text-gray-900">管理员</label>
                  <p class="text-gray-500">系统管理员，负责平台的各种功能管理。</p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import defaultAvatar from '../assets/profile/default_avatar.jpg'
import PHFormInput from './PHFormInput.vue'

const fileInput = ref<HTMLInputElement | null>(null)
const avatar = ref<string>('')
const username = ref<string>('')
const password = ref<string>('')
const confirmPassword = ref<string>('')
const email = ref<string>('')
const user = ref<boolean>(false)
const admin = ref<boolean>(false)

const errSituation = ref<number>(0)
const errMessage = computed(() => {
  if (errSituation.value == 0) return ''
  return [
    '用户名不能为空',
    '密码不能为空',
    '确认密码不能为空',
    '两次输入的密码不一致',
    '用户名不能重复',
    '服务器错误, 请稍后再试'
  ][errSituation.value - 1]
})

const chooseFile = () => {
  fileInput.value?.click()
}

const uploadFile = async () => {
  if (fileInput.value?.files) {
    avatar.value = URL.createObjectURL(fileInput.value.files[0])
  }
}

const submit = async () => {
  console.log(username.value, password.value, confirmPassword.value, email.value, user.value, admin.value)
  console.log("submit")
}

defineExpose({
  submit,
})
</script>

<style scoped>
</style>