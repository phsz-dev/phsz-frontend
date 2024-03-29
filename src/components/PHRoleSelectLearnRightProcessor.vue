<template>
    <div class="px-1 py-2 h-fit bg-white dark:bg-dark-block-600">
        <div v-for="(item,index) in processProcedure" :key="index" class="select-none py-1">
            <div class="flex flex-row" @click="currentIndex=item.rank-1">
                <div class="border-2 border-black w-8 h-8 rounded-full text-black dark:border-gray-200 dark:text-gray-200 text-center leading-7 mx-auto" :class="{
                    '!border-secondary-500 !text-secondary-500': index<=currentIndex!
                }">{{ item.rank }}</div>
                <div class="pl-2 text-sm flex-1 text-black dark:text-gray-200" :class="{
                    '!text-secondary-500': index<=currentIndex!
                }">{{ item.name }}</div>
            </div>
            <div class="w-0.5 h-10 bg-black dark:bg-gray-200 mx-4" :class="{
                '!bg-secondary-500': index<=currentIndex!-1
            }" v-if="index!=processProcedure.length-1"></div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoleStore } from '../stores/role';
const processProcedure = useRoleStore().processProcedure;
const currentIndex = defineModel<number>();
</script>