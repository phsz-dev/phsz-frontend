<template>
    <div class="w-full h-fit bg-white dark:bg-dark-block-600 px-3 py-3">
        <div v-html="processContent"></div>
    </div>

</template>

<script setup lang="ts">
import { useRoleStore } from '../stores/role';
import { computed } from 'vue';

const props = defineProps<{
    currentIndex: number
}>()

const processContent = computed(() => {
    return useRoleStore().processProcedure[props.currentIndex].content
})


</script>