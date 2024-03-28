<template>
  <div class="flex space-x-4 p-16">
    <div
      v-for="feature in features"
      :key="feature.id"
      class="flex-1 rounded-lg p-4 dark:!bg-dark-block-600"
      :style="{ backgroundColor: feature.bg_color }"
    >
      <RouterLink :to="feature.url">
        <div class="h-12 w-12 text-4xl">{{ feature.icon }}</div>
        <div class="h-2"></div>
        <h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">
          {{ feature.title }}
        </h2>
        <div class="h-2"></div>
        <p class="text-gray-600 dark:text-gray-400">
          {{ feature.description }}
        </p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    id: 0,
    bg_color: '#a8d8ea', 
    icon: '🏫',
    title: '医院导览',
    url: '/navigation',
    description: '医院导览，浏览各个区域的设施、人员、设备等信息'
  },
  {
    id: 1,
    bg_color: '#eaffd0',
    icon: '🧙',
    title: '角色扮演',
    url: '/role-select',
    description:
      '可以在角色扮演学习中进行医生、医助等角色的扮演，并且进行流程、知识点的学习'
  },
  {
    id: 2,
    bg_color: '#95e1d3',
    icon: '🏥',
    title: '病例',
    url: '/case-study',
    description: '学习宠物医院的常见病例'
  },
  {
    id: 3,
    bg_color: '#ffffd2',
    icon: '📚',
    title: '我的',
    url: '/profile',
    description: '查看自己的学习进度'
  }
]
</script>
