<template>
    <div>
        <div v-for="(item,index) in processProcedure" :key="index">
            <div>
                <div>{{ item.rank }}</div>
                <div>{{ item.name }}</div>
            </div>
            <div class="w-0.5 h-10 bg-black dark:bg-gray-200" :class="{
                'bg-secondary-500': index<=procedure_id
            }" v-if="index!=processProcedure.length-1"></div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoleStore } from '../stores/role';
import {ref} from 'vue';
const processProcedure = useRoleStore().processProcedure;
const procedure_id = ref(0)
</script>