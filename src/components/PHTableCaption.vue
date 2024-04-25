<template>
  <div class="flex flex-row items-center justify-between px-3 py-3">
    <div class="px-2 text-lg font-bold text-black dark:text-gray-200">
      {{ props.title }}
    </div>
    <button
      v-if="props.buttonName"
      class="rounded bg-secondary-500 px-4 py-2 text-sm text-white"
      @click="props.addItem"
    >
      {{ props.buttonName }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  buttonName?: string
  addItem: () => void
}>()
</script>

<style scoped></style>
