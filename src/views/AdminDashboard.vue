<template>
  <div class="mx-auto flex max-w-screen-2xl flex-row px-4">
    <div class="h-full w-80">
      <PHLeftMenu
        v-model="currentIndex"
        :title="left_title"
        :left-menu="menuList.map((item) => item.name)"
      />
    </div>
    <div class="h-full w-full px-2">
      <PHAdminDashboardRightContent :current-index="currentIndex" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PHLeftMenu from '../components/PHLeftMenu.vue'
import PHAdminDashboardRightContent from '../components/PHAdminDashboardRightContent.vue'
import { ref } from 'vue'

const left_title = '管理菜单'
const menuList = [
  { name: '用户管理' },
  { name: '疾病管理' },
  { name: '病例管理' },
  { name: '文章管理' },
  { name: '评论管理' },
  { name: '系统设置' },
]
// 当前索引
let currentIndex = ref(0)
</script>

<style scoped>

</style>
