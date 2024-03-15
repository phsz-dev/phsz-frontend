<template>
  <button
    @click="toogleDark"
    class="pl-[1px] border-[1px] border-gray-700 dark:border-gray-400 rounded-full w-10 h-6"
  >
    <span
      class="dark:translate-x-4 block w-5 h-5 bg-gray-700 dark:bg-gray-400 rounded-full transform transition-transform"
    ></span>
  </button>
</template>

<script setup lang="ts">
const toogleDark = () => {
  document.documentElement.classList.toggle("dark");
};
</script>
