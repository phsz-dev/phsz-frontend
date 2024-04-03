<template>
  <div class="flex w-full flex-row py-5">
    <div class="mr-2.5 w-32 flex-auto">
      <PHLeftMenu
        v-model="menu_id"
        :title="left_title"
        :left-menu="left_menu"
      />
    </div>
    <div
      class="ml-2.5 h-fit w-64 flex-[3_3_auto] rounded-sm bg-white dark:bg-dark-block-500"
    >
      <div
        class="mx-4 border-b-2 border-gray-300 py-3 text-lg text-black dark:border-zinc-500 dark:text-gray-200"
      >
        {{ left_menu[menu_id] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHLeftMenu from './PHLeftMenu.vue'
import { watch } from 'vue'

import { useUserStore } from '../stores/user'
import router from '../router'

const userStore = useUserStore()

const left_title = '用户中心'
const left_menu = [
  '我的课程',
  '我的收藏',
  '我的问答',
  '我的考试',
  '我的证书',
  '我的消息',
  '我的设置',
  '退出登录'
]
const menu_id = ref(0)

watch(menu_id, (newVal) => {
  if (newVal == 7) {
    userStore.logout()
    router.push('/login')
  }
})
</script>
