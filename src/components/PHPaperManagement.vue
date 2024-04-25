<template>
  <PHManagement
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
  >
    <!-- <PHPaperForm ref="paperForm" /> -->
  </PHManagement>
</template>

<script setup lang="ts">
import PHManagement from './PHManagement.vue'

const title = '试卷管理'
const buttonName = '新建试卷'
const addItem = () => {
  console.log('add item')
}

//   interface Paper {
//   id: number
//   name: string
//   content: string
//   durationSeconds: number
//   totalScore: number
//   questions: PaperQuestion[]
// }
const tableHeaders = [
  { text: 'ID', value: 'id' },
    { text: '试卷名称', value: 'name' },
    { text: '时长(秒)', value: 'durationSeconds' },
    { text: '总分', value: 'totalScore' },
    { text: '截止日期', value: 'deadline', type: 'time' }
]

const url = '/api/test/paper'
</script>

<style scoped></style>
