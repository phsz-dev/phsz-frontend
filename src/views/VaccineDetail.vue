<template>
    <div class="mx-auto h-full max-w-5xl">
        <PHVaccine :vaccine-id="vaccine_id" />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import PHVaccine from '../components/PHVaccine.vue';
const store = useRoute();

const vaccine_id = parseInt(store.params.id as string)



</script>