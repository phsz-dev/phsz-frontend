<template>
  <div class="flex flex-row items-center align-middle">
    <div class="h-3 w-3"></div>
    <div class="px-2 text-lg font-bold text-black dark:text-gray-200">
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<style scoped></style>
