<template>
  <div class="mr-1.5 h-fit w-full rounded-sm bg-white dark:bg-dark-block-500">
    <div
      class="mx-4 border-b-2 border-gray-300 py-3 text-lg text-black dark:border-zinc-500 dark:text-gray-200"
    >
      {{ title }}
    </div>
    <div
      v-for="(item, index) in left_menu"
      :key="index"
      @click="menu_id = index"
      :class="{
        '!text-secondary-500': menu_id == index
      }"
      class="text-md mx-4 my-2 cursor-pointer rounded-md px-2 py-4 font-medium text-black transition-colors duration-300 ease-in-out hover:text-secondary-500 dark:text-gray-200"
    >
      {{ item }}
    </div>
    <div class="h-2"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: String
  left_menu: String[]
}>()

const menu_id = defineModel<number>()
</script>
