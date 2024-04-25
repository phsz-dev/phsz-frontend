<template>
  <div class="p-2">
    <div
      class="text-black dark:!text-gray-200"
      v-html="store.detailedCase?.description"
    ></div>
    <div class="mt-5 flex h-10 leading-10">
      <div class="text-xl font-bold text-black dark:!text-gray-200  h-10 leading-10">
        确认疾病:
      </div>
      <div
        class="ml-4 text-black dark:!text-gray-200 leading-10"
      >
        <a>{{ store.detailedCase?.diseaseList.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from '../stores/case'
const store = useCaseStore()
</script>
