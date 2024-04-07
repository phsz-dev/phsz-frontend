<template>
  <div class="flex w-full flex-row py-2">
    <div class="mr-1 w-32 flex-auto">
      <PHLeftMenu
        v-model="menu_id"
        :title="left_title"
        :left-menu="left_menu"
      />
    </div>
    <div
      class="ml-1 h-fit w-64 flex-[3_3_auto] rounded-sm bg-white dark:bg-dark-block-500"
    >
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PHLeftMenu from './PHLeftMenu.vue'
import { useRoute } from 'vue-router'

import { useUserStore } from '../stores/user'
import router from '../router'

const userStore = useUserStore()
const route = useRoute()

const left_title = '用户中心'
const left_menu = [
  '编辑信息',
  '病例收藏',
  '我的问答',
  '我的考试',
  '我的证书',
  '我的消息',
  '我的设置',
  '退出登录'
]

const routes = [
  '',
  '/collect-case',
  '/my-questions',
  '/my-exams',
  '/my-certificate',
  '/my-messages',
  '/my-settings'
]

// menu_id和当前路由对应
const menu_id = ref(
  routes.findIndex((item) => '/profile' + item === route.path)
)

watch(menu_id, (newVal) => {
  if (left_menu[newVal] === '退出登录') {
    userStore.logout()
    router.push('/login')
  }else{
    router.push('/profile'+routes[newVal])
  }
})
</script>
