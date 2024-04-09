<template>
  <div class="mx-auto h-full max-w-5xl">
    <PHAssay :assay-id="assay_id" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import PHAssay from '../components/PHAssay.vue'
const store = useRoute()

const assay_id = parseInt(store.params.id as string)
</script>
