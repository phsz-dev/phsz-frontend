<template>
  <div class="flex flex-col space-y-4 rounded-md bg-white px-4 py-4">
    <div class="flex flex-col space-y-2">
      <h2 class="space-y-2 text-lg font-bold">疾病分类</h2>
      <div class="h-0.5 space-y-2 bg-gray-200"></div>
      <ul class="flex flex-col space-y-2">
        <li
          v-for="(item, index) in diseaseCatalog.map(item => item.name)"
          :key="index"
          class="cursor-pointer space-y-1 px-1 py-1 text-base"
        >
          <div
            @click="updateCurrentIndex(index)"
            :class="{
              'bg-secondary-50 text-secondary-500': currenIndex === index
            }"
            class="rounded-md px-2 py-3 text-sm font-medium hover:text-secondary-500 transition-colors duration-300 ease-in-out"
          >
            {{ item }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from '../stores/case';
const currenIndex = defineModel()

const emits = defineEmits(['update:currentIndex'])
const {diseaseCatalog} = useCaseStore()

function updateCurrentIndex(index: number) {
    currenIndex.value = index
}
</script>
