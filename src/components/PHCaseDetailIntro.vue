<template>
  <div class="p-2">
    <div
      class="text-black dark:!text-gray-200"
      v-html="store.detailedCase?.description"
    ></div>
    <div class="mt-5">
      <div class="text-xl font-bold text-black dark:!text-gray-200">
        确认疾病:
      </div>
      <div class="flex flex-row">
        <div
          v-for="(item, index) in store.detailedCase?.diseaseList"
          :key="index"
          class="ml-2 text-black dark:!text-gray-200"
        >
          <a>{{ item.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from '../stores/case'
const store = useCaseStore()
</script>
