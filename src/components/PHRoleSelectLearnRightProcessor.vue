<template>
  <div class="h-fit rounded-sm bg-white px-1 py-2 dark:bg-dark-block-600">
    <div
      v-for="(item, index) in processProcedure"
      :key="index"
      class="select-none"
    >
      <div
        class="flex cursor-pointer flex-row align-middle hover:text-secondary-500"
        @click="(currentIndex ?? [0, 0, 0])[2] = item.rank - 1"
      >
        <div
          class="mx-auto h-8 w-8 rounded-full border-2 border-black text-center leading-7 text-black dark:border-gray-200 dark:text-gray-200"
          :class="{
            '!border-secondary-500 !text-secondary-500':
              index <= (currentIndex ?? [0, 0, 0])[2]!
          }"
        >
          {{ item.rank }}
        </div>
        <div
          class="flex-1 pl-2 text-sm text-black dark:text-gray-200"
          :class="{
            '!text-secondary-500': index <= (currentIndex ?? [0, 0, 0])[2]!
          }"
        >
          {{ item.name }}
        </div>
      </div>
      <div
        v-if="index != processProcedure.length - 1"
        class="mx-4 my-2 h-10 w-0.5 bg-black dark:bg-gray-200"
        :class="{
          '!bg-secondary-500': index <= (currentIndex ?? [0, 0, 0])[2]! - 1
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoleStore } from '../stores/role'
import { computed } from 'vue'
const currentIndex = defineModel<number[]>()
const processProcedure = computed(() => {
  if (currentIndex.value == undefined) {
    return []
  }
  return useRoleStore().roleResponsibility[currentIndex.value[0]]
    .subResponsibilities[currentIndex.value[1]].procedures
})
</script>
