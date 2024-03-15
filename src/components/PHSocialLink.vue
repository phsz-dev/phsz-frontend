<template>
  <a :href="props.href" target="_blank" rel="noopener noreferrer" class="hover:text-primary-500 dark:hover:text-primary-400">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string;
}>();
</script>

<style scoped>

a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

a > :deep(svg),
a > :deep([class^="phi-social-"]) {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
