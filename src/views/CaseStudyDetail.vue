<template>
    <div class="max-w-5xl mx-auto h-full">
        <PHCaseStudyDetail :disease_id="disease_id" />
    </div>
</template>

<script setup lang="ts">
import PHCaseStudyDetail from '../components/PHCaseStudyDetail.vue';
import { useRoute } from 'vue-router';
const disease_id = parseInt(useRoute().params.id as string);
</script>