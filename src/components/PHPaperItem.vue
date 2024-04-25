<template>
  <RouterLink
    :to="{ path: `/paper-details/${paperId}` }"
    class="min-h-28 rounded-lg border bg-white p-4 shadow hover:cursor-pointer hover:bg-gray-50 hover:shadow-md active:bg-gray-100 dark:border-none dark:bg-dark-block-600 dark:hover:bg-dark-block-700"
  >
    <h2 class="text-lg font-bold text-gray-800 dark:text-gray-200">
      {{ name }}
    </h2>
    <p class="text-gray-500 dark:text-gray-200">{{ description }}</p>
    <p class="float-right text-gray-500 dark:text-gray-200">{{ new Date(deadline).toLocaleDateString() }} 截止</p>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  paperId: number
  name: string
  description: string
  deadline: string
}>()
</script>
