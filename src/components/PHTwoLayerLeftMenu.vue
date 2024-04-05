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
          v-if="item.subResponsibilities"
          class="phi-right-arrow h-6 w-6 rounded-full bg-zinc-700 group-hover:bg-secondary-500 dark:bg-gray-200 dark:group-hover:bg-secondary-500"
          :class="{
            'rotate-90 transform': item.status
          }"
        ></span>
      </div>

      <template v-if="item.subResponsibilities && item.status">
        <div
          v-for="(subItem, subIndex) in item.subResponsibilities"
          :key="subIndex"
          class="mx-4 cursor-pointer rounded-md px-2 pt-4 transition-colors duration-300 ease-in-out"
        >
          <div
            class="text-md pt-2 font-medium text-black hover:text-secondary-500 dark:text-gray-200"
            :class="{
              '!text-secondary-500': (menu_id==undefined?[0,0,0]:menu_id)[1] == subIndex&&(menu_id==undefined?[0,0,0]:menu_id)[0] == index
            }"
            @click="setId(index, subIndex)"
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
import { ref,watch } from 'vue'

const props = defineProps<{
  title: string
  leftMenu: MenuLayer[]
}>()

console.log(props.leftMenu)

const setId = (index: number, subIndex: number) => {
  if(menu_id.value){
    menu_id.value[0] = index
    menu_id.value[1] = subIndex
    menu_id.value[2] = 0
  }
}

const left_menu_list = ref(props.leftMenu)

watch(() => props.leftMenu, (newVal) => {
  left_menu_list.value = newVal
})


const menu_id = defineModel<number[]>()
console.log(menu_id.value)
</script>
