<template>
  <div class="p-2">
    <div
      v-if="
        store.detailedCase?.medicines && store.detailedCase.medicines.length > 0
      "
    >
      <div
        class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
      >
        <div class="flex-[2_2_0%]">名称</div>
        <div class="flex-[2_2_0%]">用法</div>
        <div class="flex-1 text-center">药量</div>
        <div class="flex-[2_2_0%]">开药日期</div>
      </div>
      <div
        v-for="(item, index) in store.detailedCase?.medicines"
        :key="index"
        class="px-2 py-3"
        :class="
          index % 2 === 0
            ? 'bg-secondary-50 dark:bg-gray-800'
            : 'bg-secondary-100/60 dark:bg-gray-700'
        "
      >
        <div
          class="flex w-full flex-row text-base text-black dark:!text-gray-200"
        >
          <RouterLink
            :to="{ path: `/medicine/${item.id}` }"
            class="flex-[2_2_0%] hover:cursor-pointer hover:text-primary-500"
            >{{ item.name }}</RouterLink
          >
          <div class="flex-[2_2_0%]">{{ item.usage }}</div>
          <div class="flex-1 text-center">{{ item.medicineDosage }}</div>
          <div class="flex-[2_2_0%]">
            {{ new Date(item.validity).toLocaleDateString() }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-base font-bold text-black dark:!text-gray-200">
        无疫苗信息
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from '../stores/case'
const store = useCaseStore()
</script>
