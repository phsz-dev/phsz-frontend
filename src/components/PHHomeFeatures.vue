<template>
  <div class="flex space-x-4 p-16">
    <div
      v-for="feature in features"
      :key="feature.id"
      class="flex-1 rounded-lg p-4 dark:bg-slate-800"
      :style="{ backgroundColor: isDark ? '#202127' : feature.bg_color }"
    >
      <div class="h-12 w-12 text-4xl">{{ feature.icon }}</div>
      <div class="h-2"></div>
      <h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">
        {{ feature.title }}
      </h2>
      <div class="h-2"></div>
      <p class="text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()

const features = [
  {
    id: 1,
    bg_color: '#FFE6E6',
    icon: '🧙',
    title: '角色扮演',
    description:
      '可以在角色扮演学习中进行医生、医助等角色的扮演，并且进行流程、知识点的学习'
  },
  {
    id: 2,
    bg_color: '#FFF1E6',
    icon: '🏥',
    title: '病例',
    description: '学习宠物医院的常见病例'
  },
  {
    id: 3,
    bg_color: '#FFFAE6',
    icon: '📚',
    title: '我的',
    description: '查看自己的学习进度'
  }
]
</script>
