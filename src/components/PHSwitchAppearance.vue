<template>
  <button
    class="h-6 w-10 rounded-full border-[1px] border-gray-700 pl-[1px] dark:border-gray-400"
    @click="toogleDark()"
  >
    <span
      id="toogleDark"
      class="block size-5 !transform rounded-full bg-gray-700 !transition-transform dark:translate-x-4 dark:bg-gray-400"
    ></span>
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toogleDark = useToggle(isDark)
</script>
