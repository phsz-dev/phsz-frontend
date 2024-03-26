<template>
  <div
    class="flex flex-col space-y-4 rounded-md bg-white px-4 py-4 dark:!bg-dark-block-600"
  >
    <div class="flex flex-col space-y-2">
      <h2 class="space-y-2 text-lg font-bold dark:text-gray-200">疾病分类</h2>
      <div class="h-0.5 space-y-2 bg-gray-200"></div>
      <ul class="flex flex-col space-y-2">
        <li
          v-for="(item, index) in diseaseCatalog.map((item) => item.name)"
          :key="index"
          class="cursor-pointer space-y-1 px-1 py-1 text-base"
        >
          <div
            :class="{
              'bg-secondary-50 text-secondary-500 dark:bg-dark-block-400':
                currenIndex === index
            }"
            class="text-md rounded-md px-2 py-3 font-medium text-black transition-colors duration-300 ease-in-out hover:text-secondary-500 dark:text-gray-200"
            @click="updateCurrentIndex(index)"
          >
            {{ item }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from '../stores/case'
const currenIndex = defineModel<number>()

const { diseaseCatalog } = useCaseStore()

function updateCurrentIndex(index: number) {
  currenIndex.value = index
}
</script>
