<template>
  <a :href="props.href" target="_blank" class="flex">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string;
}>();
</script>

<style scoped>
a > :deep(svg),
a > :deep([class^="phi-social-"]) {
  width: 20px;
  height: 20px;
  background-color: currentColor;
}
</style>
