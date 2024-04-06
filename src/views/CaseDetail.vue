<template>
  <div class="mx-auto h-full max-w-5xl bg-white dark:!bg-dark-block-500">
    <PHCaseDetail :case_id="case_id" />
  </div>
</template>

<script setup lang="ts">
import PHCaseDetail from '../components/PHCaseDetail.vue'
import { useRoute } from 'vue-router'
const case_id = parseInt(useRoute().params.id as string)
</script>
