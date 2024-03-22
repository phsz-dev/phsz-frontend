<template>
    <div class="mx-auto max-w-7xl flex flex-row px-4">
        <div class="w-56 h-full">
            <PHCaseStudyLeftCatalog v-model="currentIndex" />
        </div>
        <div class="w-1/2 h-full px-2">
            <PHCaseStudyRightContent :currentIndex="currentIndex" />
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