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
      class="mx-4 my-2 cursor-pointer rounded-md px-2 py-4  transition-colors duration-300 ease-in-out"
    >
        <div class="flex flex-row justify-between px-2">
            <div class="flex-grow text-md font-medium text-black hover:text-secondary-500 dark:text-gray-200">{{ item.name }}</div>
            <span class="phi-common-arrow bg-black w-5 h-5" v-if="item.subMenu"></span>
        </div>
      
        <template v-if="item.subMenu">
            <div v-for="(subItem, subIndex) in item.subMenu" :key="subIndex" class="mx-4 my-2 cursor-pointer rounded-md px-2 py-4  transition-colors duration-300 ease-in-out">
                <div class="text-md font-medium text-black hover:text-secondary-500 dark:text-gray-200">{{ subItem.name }}</div>
            </div>
        </template>
    </div>
    <div class="h-2"></div>
  </div>
</template>

<script setup lang="ts">
import MenuLayer from '../types/MenuLayer'

defineProps<{
  title: string
  left_menu: MenuLayer[]
}>()

const menu_id = defineModel<number>()
</script>
