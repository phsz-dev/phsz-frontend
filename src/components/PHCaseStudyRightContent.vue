<template>
  <div>
    <div>{{ props.currentIndex }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentIndex: number
}>()

</script>
