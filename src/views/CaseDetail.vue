<template>
  <div class="mx-auto pb-2 max-w-5xl h-full">
    <PHCaseDetail :case_id="case_id" />
  </div>
</template>

<script setup lang="ts">
import PHCaseDetail from '../components/PHCaseDetail.vue'
import { useRoute } from 'vue-router'
const case_id = parseInt(useRoute().params.id as string)
</script>
