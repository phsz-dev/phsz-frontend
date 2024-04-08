<template>
    <div class="mx-auto h-full max-w-5xl">
        <PHMedicine :medicine-id="medicine_id" />
    </div>
</template>

<script setup lang="ts">
import PHMedicine from '../components/PHMedicine.vue'
import { useRoute } from 'vue-router'
const store = useRoute();

const medicine_id = parseInt(store.params.id as string)



</script>