<template>
  <div class="flex w-full flex-row items-center justify-around">
    <div
      v-for="(item, index) in choices"
      :key="index"
      @click="changeIndex(index)"
    >
      <div
        class="text-md mx-4 my-1 cursor-pointer py-2 font-medium text-black transition-colors duration-300 ease-in-out hover:text-secondary-500 dark:text-gray-200"
        :class="{
          'border-b-2 border-b-secondary-600': store.currentIndex === index
        }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '../router'
import { useCaseStore } from '../stores/case'
import { onMounted, onUnmounted } from 'vue'
const store = useCaseStore()

onMounted(() => {
  store.currentIndex = parseInt(localStorage.getItem('currentIndex') || '0')
})

onUnmounted(() => {
  localStorage.removeItem('currentIndex')
})

const props = defineProps<{
  choices: string[]
  routes: any[]
}>()

const changeIndex = (index: number) => {
  store.currentIndex = index
  localStorage.setItem('currentIndex', index.toString())
  router.push(props.routes[index])
}
</script>
