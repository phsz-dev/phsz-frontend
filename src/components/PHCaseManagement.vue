<template>
  <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500">
    <PHTableCaption :title="title" />
  </div>
</template>

<script setup lang="ts">
import PHTableCaption from '../components/PHTableCaption.vue'
import {usePage} from '../composables'
import AdminCase from '../types/AdminCase'

const { page } = usePage<AdminCase>('/api/cases', 10)


const title = '病例管理'
</script>

<style scoped></style>
