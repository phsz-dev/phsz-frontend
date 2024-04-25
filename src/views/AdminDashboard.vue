<template>
  <div class="mx-auto flex max-w-screen-2xl flex-row px-4 h-full pb-4">
    <div class="h-full w-80">
      <PHLeftMenu
        v-model="menu_id"
        :title="left_title"
        :left-menu="menuList.map((item) => item.name)"
      />
    </div>
    <div class="h-full w-full px-2">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import PHLeftMenu from '../components/PHLeftMenu.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router'

const route = useRoute()

const left_title = '管理菜单'
const menuList = [
  { name: '用户管理' },
  { name: '检查管理' },
  { name: '药品管理' },
  { name: '疫苗管理' },
  { name: '病例管理' },
  { name: '题目管理' },
  { name: '试卷管理' },
  { name: '考试管理' },
  { name: '场景数据' },
  { name: '定点数据' },
  { name: '知识库' }
]

const routes = [
  '/user-management',
  '/assay-management',
  '/medicine-management',
  '/vaccine-management',
  '/case-management',
  '/question-management',
  '/paper-management',
  '/exam-management',
  '/3d-scene-management',
  '/3d-spot-management',
  '/document-management'
]

const menu_id = ref(
  routes.findIndex((item) => '/admin-dashboard' + item === route.path)
)

watch(menu_id, (newVal) => {
  router.push('/admin-dashboard' + routes[newVal])
})
</script>

<style scoped></style>
