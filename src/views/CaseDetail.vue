<template>
  <div class="mx-auto h-full max-w-5xl">
    <PHCaseDetail :case_info="store.detailedCase" />
  </div>
</template>

<script setup lang="ts">
import PHCaseDetail from '../components/PHCaseDetail.vue'
import { useRoute } from 'vue-router'
import { useCaseStore } from '../stores/case'
import { onMounted } from 'vue'
const store = useCaseStore()
const case_id = parseInt(useRoute().params.id as string)
onMounted(() => {
  try {
    store.getDetailedCase(case_id)
  } catch (e) {
    console.log(e)
  }
})
</script>
