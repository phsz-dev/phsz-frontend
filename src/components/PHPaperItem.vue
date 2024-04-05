<template>
  <RouterLink
    :to="{ path: `/paper-details/${paperId}` }"
    class="min-h-28 rounded-lg border bg-white p-4 shadow hover:cursor-pointer hover:bg-gray-50 hover:shadow-md active:bg-gray-100 dark:border-none dark:bg-dark-block-600"
  >
    <h2 class="text-lg font-bold text-gray-800 dark:text-gray-200">
      {{ name }}
    </h2>
    <p class="text-gray-500 dark:text-gray-200">{{ description }}</p>
    <!-- <div class="mt-2">
          <button
            class="rounded-lg bg-primary-600 px-4 py-2 text-white hover:shadow"
          >
            选择
          </button>
        </div> -->
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  paperId: number
  name: string
  description: string
}>()
</script>