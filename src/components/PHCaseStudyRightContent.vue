<template>
  <div
    class="flex h-full flex-col rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500"
  >
    <div class="flex flex-row items-center align-middle">
      <div class="h-3 w-3"></div>
      <div class="px-2 text-lg font-bold text-black dark:text-gray-200">
        {{ diseaseCatalog[props.currentIndex].diseaseType.name }}
      </div>
    </div>
    <div class="flex w-full flex-row flex-wrap justify-around py-2">
      <!-- 三个一行 -->
      <RouterLink
        v-for="(item, index) in diseaseCatalog[props.currentIndex].diseaseList"
        :key="index"
        :to="{ name: 'CaseStudyDetail', params: { id: item.id } }"
        class="cursor-pointer space-y-4 rounded-md px-2 py-4 hover:bg-secondary-50 hover:text-secondary-500 sm:w-[41.67%] md:w-[29.167%] hover:dark:bg-dark-block-400"
      >
        <div class="text-md dark:text-gray-200">{{ item.name }}</div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from '../stores/case'
const props = defineProps<{
  currentIndex: number
}>()
const { diseaseCatalog } = useCaseStore()
</script>
