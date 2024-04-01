<template>
    <div class="w-full h-full">
        <div>{{ disease_id }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    disease_id: number
}>()
</script>