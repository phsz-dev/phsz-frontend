<template>
  <div class="mr-1.5 h-fit w-full rounded-sm bg-white dark:bg-dark-block-500">
    <div
      class="mx-4 border-b-2 border-gray-300 py-3 text-lg text-black dark:border-zinc-500 dark:text-gray-200"
    >
      {{ title }}
    </div>
    <div
      v-for="(item, index) in left_menu_list"
      :key="index"
      @click="menu_id = index"
      :class="{
        '!text-secondary-500': menu_id == index
      }"
      class="mx-4 my-1 cursor-pointer select-none rounded-md px-2 py-3 transition-colors duration-300 ease-in-out"
    >
      <div
        class="group flex flex-row justify-between px-2"
        @click="item.status = !item.status"
      >
        <div
          class="text-md flex-grow font-medium text-black group-hover:text-secondary-500 dark:text-gray-200"
        >
          {{ item.name }}
        </div>
        <span
          class="phi-right-arrow h-6 w-6 bg-zinc-700 dark:bg-gray-200 group-hover:bg-secondary-500 dark:group-hover:bg-secondary-500 rounded-full"
          :class="{
            'rotate-90 transform': item.status
          }"
          v-if="item.subMenu"
        ></span>
      </div>

      <template v-if="item.subMenu && item.status">
        <div
          v-for="(subItem, subIndex) in item.subMenu"
          :key="subIndex"
          class="mx-4 cursor-pointer rounded-md px-2 pt-4 transition-colors duration-300 ease-in-out"
        >
          <div
            class="text-md font-medium text-black hover:text-secondary-500 dark:text-gray-200 pt-2"
          >
            {{ subItem.name }}
          </div>
        </div>
      </template>
    </div>
    <div class="h-2"></div>
  </div>
</template>

<script setup lang="ts">
import MenuLayer from '../types/MenuLayer'
import { reactive } from 'vue'

const props = defineProps<{
  title: string
  left_menu: MenuLayer[]
}>()

const left_menu_list = reactive(props.left_menu)

const menu_id = defineModel<number>()
</script>
