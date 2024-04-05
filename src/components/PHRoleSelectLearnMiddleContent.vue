<template>
  <div
    class="h-fit w-full rounded-sm bg-white px-3 py-3 dark:bg-dark-block-600"
  >
    <div class="text-black dark:text-gray-200" v-html="processContent"></div>
  </div>
</template>

<script setup lang="ts">
import { useRoleStore } from '../stores/role'
import { computed } from 'vue'

const props = defineProps<{
  currentIndex: number[]
}>()

const processContent = computed(() => {
  if( useRoleStore().roleResponsibility[props.currentIndex[0]].subResponsibilities.length == 0) {
    return ''
  }
  if( useRoleStore().roleResponsibility[props.currentIndex[0]].subResponsibilities[props.currentIndex[1]].procedures.length == 0) {
    return ''
  }
  return useRoleStore().roleResponsibility[props.currentIndex[0]].subResponsibilities[props.currentIndex[1]].procedures[props.currentIndex[2]].content
})
</script>
