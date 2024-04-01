<template>
    <div class="w-full my-4 overflow-hidden overflow-y-scroll bg-white dark:bg-dark-block-500 px-4 py-1 rounded-md" style="max-height: 95%;">
        <div v-for="(item,index) in disease_case_list" :key="index" class="p-2 border-b border-gray-300 py-4 hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="flex justify-between items-center">
                <div class="text-lg font-bold dark:text-gray-200">{{item.caseName}}</div>
                <div class="text-sm dark:text-gray-200">{{new Date(item.submitTime).toLocaleString()}}</div>
                
            </div>
            <div class="text-gray-600 dark:text-gray-200 mt-2 overflow-hidden text-ellipsis line-clamp-2 leading-6 text-sm">病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述</div>
        </div>
        <div class="h-3"></div>
        <!-- 翻页栏 -->
        <div class="flex justify-center items-center w-1/3 mx-auto">
            <div class="flex items-center w-full justify-around">
                
                <div class="w-20 h-6 flex justify-center items-center rounded-md bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200">上一页</div>
                <div class="text-gray-600 dark:text-gray-200">1/1</div>
                <div class="w-20 h-6 flex justify-center items-center rounded-md bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 ml-2">下一页</div>
                <div class="text-gray-600 dark:text-gray-200">共8条</div>
            </div>
        </div>
        <div class="h-3"></div>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
defineProps<{
    disease_id: number
}>()

const disease_case_list = reactive([
    {
        caseId: 1,
        caseName: '病例1',
        caseDescription: '<p>病例1描述</p><p>病例1描述</p><p>病例1描述</p>',
        submitTime: 1711952152437
    },
    {
        caseId: 2,
        caseName: '病例2',
        caseDescription: '<p>病例2描述</p><p>病例2描述</p><p>病例2描述</p>',
        submitTime: 1711952152437
    },
    {
        caseId: 3,
        caseName: '病例3',
        caseDescription: '<p>病例3描述</p><p>病例3描述</p><p>病例3描述</p>',
        submitTime: 1711952152437
    },
    {
        caseId: 4,
        caseName: '病例4',
        caseDescription: '<p>病例4描述</p><p>病例4描述</p><p>病例4描述</p>',
        submitTime: 1711952152437
    },
    {
        caseId: 5,
        caseName: '病例5',
        caseDescription: '<p>病例5描述</p><p>病例5描述</p><p>病例5描述</p>',
        submitTime: 1711952152437
    },
    {
        caseId: 6,
        caseName: '病例6',
        caseDescription: '<p>病例6描述</p><p>病例6描述</p><p>病例6描述</p>',
        submitTime: 1711952152437
    },
    {
        caseId: 7,
        caseName: '病例7',
        caseDescription: '<p>病例7描述</p><p>病例7描述</p><p>病例7描述</p>',
        submitTime: 1711952152437
    },
    {
        caseId: 8,
        caseName: '病例8',
        caseDescription: '<p>病例8描述</p><p>病例8描述</p><p>病例8描述</p>',
        submitTime: 1711952152437
    },
    {
        caseId: 9,
        caseName: '病例9',
        caseDescription: '<p>病例9描述</p><p>病例9描述</p><p>病例9描述</p>',
        submitTime: 1711952152437
    },
    {
        caseId: 10,
        caseName: '病例10',
        caseDescription: '<p>病例10描述</p><p>病例10描述</p><p>病例10描述</p>',
        submitTime: 1711952152437
    }
])

</script>