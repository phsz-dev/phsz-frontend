<template>
  <button
    @click="toogleDark()"
    class="pl-[1px] border-[1px] border-gray-700 dark:border-gray-400 rounded-full w-10 h-6"
  >
    <span id="toogleDark"
      class="dark:translate-x-4 block size-5 bg-gray-700 dark:bg-gray-400 rounded-full !transform !transition-transform"
    ></span>
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toogleDark = useToggle(isDark);
</script>
