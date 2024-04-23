<template>
  <div class="flex flex-row justify-between items-center px-3 py-3">
    <div class="px-2 text-lg font-bold text-black dark:text-gray-200">
      {{ props.title }}
    </div>
    <button 
      class="px-3 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
      @click="addItem">
      {{ props.buttonName }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  buttonName: string,
  addItem: () => void
}>()
</script>

<style scoped></style>
