<template>
  <div class="mx-auto flex max-w-screen-2xl flex-row px-4">
    <div class="h-full w-80">
      <PHLeftMenu
        v-model="currentIndex"
        :title="left_title"
        :left-menu="left_menu"
      />
    </div>
    <div class="h-full w-full px-2">
      <PHCaseStudyRightContent :current-index="currentIndex" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PHLeftMenu from '../components/PHLeftMenu.vue'
import PHCaseStudyRightContent from '../components/PHCaseStudyRightContent.vue'
import { useCaseStore } from '../stores/case'
import { ref } from 'vue'
const left_title = '疾病分类'
const left_menu = useCaseStore().diseaseCatalog.map((item) => item.name)
// 当前索引
let currentIndex = ref(0)
</script>
