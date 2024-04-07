<template>
    <RouterLink :to="{ path: '/case-detail/' + roughCase.id + '/intro' }">
        <div class="flex items-center justify-between">
          <div class="text-lg font-bold dark:text-gray-200">
            {{ roughCase.name }}
          </div>
          <div class="text-sm dark:text-gray-200">
            {{ new Date(parseInt(roughCase.submitTime)).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}) }}
          </div>
        </div>
        <div
          class="mt-2 line-clamp-2 overflow-hidden text-ellipsis text-sm leading-6 text-gray-600 dark:text-gray-200"
        >
          {{ roughCase.brief }}
        </div>
      </RouterLink>
</template>

<script setup lang="ts">
import RoughCase from '../types/RoughCase'
defineProps<{
  roughCase: RoughCase
}>()
</script>