<template>
  <div class="p-2">
    <div
      v-if="
        store.detailedCase?.vaccines && store.detailedCase.vaccines.length > 0
      "
    >
      <div
        class="flex w-full flex-row bg-gray-200 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
      >
        <div class="flex-[2_2_0%]">名称</div>
        <div class="flex-[2_2_0%]">生产厂商</div>
        <div class="flex-[2_2_0%]">有效期</div>
      </div>
      <div
        v-for="(item, index) in store.detailedCase?.vaccines"
        :key="index"
        class="px-2 py-3"
        :class="
          index % 2 === 0
            ? 'bg-gray-100 dark:bg-gray-800'
            : 'bg-gray-200 dark:bg-gray-700'
        "
      >
        <div
          class="flex w-full flex-row text-base text-black dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">{{ item.name }}</div>
          <div class="flex-[2_2_0%]">{{ item.manufacturer }}</div>
          <div class="flex-[2_2_0%]">
            {{ new Date(item.expiryDate).toLocaleDateString() }}
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
