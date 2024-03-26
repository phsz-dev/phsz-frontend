<template>
  <div class="mx-auto flex max-w-screen-2xl flex-row px-4">
    <div class="h-full w-80">
      <PHCaseStudyLeftCatalog v-model="currentIndex" />
    </div>
    <div class="h-full w-full px-2">
      <PHCaseStudyRightContent :current-index="currentIndex" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PHCaseStudyLeftCatalog from '../components/PHCaseStudyLeftCatalog.vue'
import PHCaseStudyRightContent from '../components/PHCaseStudyRightContent.vue'
import { ref } from 'vue'
// 当前索引
let currentIndex = ref(0)
</script>
