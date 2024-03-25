<template>
  <div class="flex flex-col h-full py-3 bg-white px-3 rounded-md dark:!bg-dark-block-600">
    <div class="flex flex-row items-center align-middle ">
      <div class="w-3 h-3"></div>
      <div class="text-lg font-bold px-2 text-black dark:text-gray-200">{{ diseaseCatalog[props.currentIndex].name }}
      </div>
    </div>
    <div class="py-2 flex flex-row flex-wrap w-full justify-around">
      <!-- 三个一行 -->
      <div v-for="(item, index) in diseaseCatalog[props.currentIndex].diseases" :key="index"
        class="sm:w-[41.67%] md:w-[29.167%] px-2 py-4 rounded-md cursor-pointer hover:text-secondary-500 hover:dark:bg-dark-block-400 hover:bg-secondary-50 space-y-4">
        <div class="text-md dark:text-gray-200 ">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from '../stores/case';
const props = defineProps<{
  currentIndex: number
}>()
const { diseaseCatalog } = useCaseStore()
</script>
