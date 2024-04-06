<template>
    <div class="p-2">
      <div>
        <div
          class="flex w-full flex-row py-3 text-base font-bold text-black dark:!text-gray-200 px-2 bg-gray-200 dark:bg-gray-700"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%]">检查结果</div>
          <div class="flex-[2_2_0%]">开药日期</div>
        </div>
        <div
          v-for="(item, index) in store.detailedCase?.assays"
          :key="index"
          class="py-3 px-2"
          :class="index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-700'"
        >
          <div
            class="flex w-full flex-row text-base text-black dark:!text-gray-200"
          >
            <div class="flex-[2_2_0%]">{{ item.name }}</div>
            <div class="flex-[2_2_0%]">{{ item.result }}</div>
            <div class="flex-[2_2_0%]">
              {{ new Date(item.date).toLocaleDateString() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCaseStore } from '../stores/case'
  const store = useCaseStore()
  </script>
  