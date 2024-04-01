<template>
  <div
    class="w-full overflow-hidden overflow-y-scroll rounded-md bg-white px-4 py-1 dark:bg-dark-block-500"
    style="height: 98%"
  >
    <div
      v-for="(item, index) in disease_case_list"
      :key="index"
      class="border-b border-gray-300 p-2 py-4 hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      <RouterLink :to="{ path: '/case-detail/' + item.caseId }">
        <div class="flex items-center justify-between">
          <div class="text-lg font-bold dark:text-gray-200">
            {{ item.caseName }}
          </div>
          <div class="text-sm dark:text-gray-200">
            {{ new Date(item.submitTime).toLocaleString() }}
          </div>
        </div>
        <div
          class="mt-2 line-clamp-2 overflow-hidden text-ellipsis text-sm leading-6 text-gray-600 dark:text-gray-200"
        >
          病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述病例1描述
        </div>
      </RouterLink>
    </div>
    <div class="h-3"></div>
    <!-- 翻页栏 -->
    <div class="mx-auto flex w-1/3 items-center justify-center">
      <div class="flex w-full items-center justify-around">
        <div
          class="flex h-6 w-20 items-center justify-center rounded-md bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-200"
        >
          上一页
        </div>
        <div class="text-gray-600 dark:text-gray-200">1/1</div>
        <div
          class="ml-2 flex h-6 w-20 items-center justify-center rounded-md bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-200"
        >
          下一页
        </div>
        <div class="text-gray-600 dark:text-gray-200">共10条</div>
      </div>
    </div>
    <div class="h-3"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
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
