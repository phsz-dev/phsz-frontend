<template>
  <PHAuthPanel title="登录" sub-title="欢迎您的到来！！">
    <template #default>
      <div class="mx-auto flex w-full flex-col">
        <div class="relative my-2">
          <PHInputField
            v-model="username"
            placeholder="请输入用户名/邮箱"
            :error-condition="err_situation == 1||err_situation == 3"
            error-message="用户名不能为空"
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
            placeholder="请输入密码"
            :error-condition="err_situation == 2||err_situation == 3"
            error-message="密码不能为空"
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
        class="mx-2 my-8 w-24 leading-6 rounded-full p-2 text-sm text-center text-primary-600 hover:bg-secondary-50 dark:text-gray-200 hover:dark:bg-zinc-600"
        to="/register"
      >
        创建账户
      </RouterLink>
      <button
        class="mx-2 my-8 w-24 rounded-full bg-primary-600 p-2 text-white hover:shadow-lg dark:text-gray-200"
        @click="login"
      >
        下一步
      </button>
    </template>
  </PHAuthPanel>
</template>

<script setup lang="ts">
import PHAuthPanel from './PHAuthPanel.vue'
import PHInputField from './PHInputField.vue'
import { useUserStore } from '../stores/user'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import HTTPError from '../types/error';
const route = useRoute()
const err_situation = ref(0)
const username = ref('')
const password = ref('')
if(route.query.username){
  username.value = route.query.username as string
}
const userStore = useUserStore()
const login = async () => {
    if (username.value == '') {
      err_situation.value = 1
      return
    }
    if (password.value == '') {
      err_situation.value = 2
      return
    }
    // 模拟登录
    try{
      await userStore.login(username.value, password.value)
    }catch(e){
      console.log(e)
      if(e instanceof HTTPError){
        err_situation.value = 3
      }
    }
    
  // } else {
  //   // 模拟注册
  //   if (username.value == '') {
  //     err_situation.value = 1
  //     return
  //   }
  //   if (password.value == '') {
  //     err_situation.value = 2
  //     return
  //   }
  //   if (confirm_password.value == '') {
  //     err_situation.value = 3
  //     return
  //   }
  //   if (password.value != confirm_password.value) {
  //     err_situation.value = 4
  //     return
  //   }
  //   userStore.register(username.value, password.value)
  // }
}

</script>

<style scoped></style>
