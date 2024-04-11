<template>
  <div class="mx-auto h-full max-w-5xl">
    <PHCaseRevise :case_id="case_id" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import PHCaseRevise from '../components/PHCaseRevise.vue'
const case_id = parseInt(useRoute().params.id as string)
</script>