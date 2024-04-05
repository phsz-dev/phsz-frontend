<template>
  <div class="flex justify-around items-center w-full flex-row ">
    <div
      v-for="(item, index) in choices"
      :key="index"
      @click="changeIndex(index)"

    >
      <div
        class="text-md mx-4 my-1 cursor-pointer py-2 font-medium text-black transition-colors duration-300 ease-in-out hover:text-secondary-500 dark:text-gray-200"
        :class="{
           'border-b-2 border-b-secondary-600': currentIndex === index,
        }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '../router';


const props = defineProps<{
  choices: string[]
  routes: any[]
}>()

const changeIndex = (index: number) => {
  currentIndex.value = index
  router.push(props.routes[index])
}

const currentIndex = defineModel<number>()
</script>
