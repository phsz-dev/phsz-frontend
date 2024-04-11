<template>
  <div class="flex w-full flex-row items-center justify-around">
    <!-- prettier-ignore -->
    <div
      v-for="(item, index) in choices"
      :key="index"
      @click="
        {
          currentIndex = index;
          emit('changeIndex')
        }
      "
    >
      <div
        class="text-md mx-4 my-1 cursor-pointer py-2 font-medium text-black transition-colors duration-300 ease-in-out hover:text-secondary-500 dark:text-gray-200"
        :class="{
          'border-b-2 border-b-secondary-600': currentIndex === index
        }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['changeIndex'])

const currentIndex = defineModel<number>()

defineProps<{
  choices: string[]
}>()
</script>
