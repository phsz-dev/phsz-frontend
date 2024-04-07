<template>
  <div class="absolute bottom-0 w-full bg-white p-4 dark:bg-dark-block-600">
    <div class="container mx-auto flex justify-between">
      <button
        class="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-50"
        @click="emit('prevQuestion')"
      >
        上一题
      </button>
      <button
        class="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-50"
        @click="emit('nextQuestion')"
      >
        下一题
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    prevQuestion: []
    nextQuestion: []
}>()
</script>
