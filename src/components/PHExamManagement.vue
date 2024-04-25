<template>
  <PHManagement
    :title="title"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
  >
    <!-- <PHExamForm ref="examForm" /> -->
  </PHManagement>
</template>

<script setup lang="ts">
import PHManagement from './PHManagement.vue'

const title = '测试管理'
const addItem = () => {
  console.log('add item')
}

// interface Exam {
//   id: number
//   userId: number
//   name: string
//   status: string
//   paper: Paper
//   startTime: string
//   endTime: string
//   questions: Answer[]
//   score: number
// }
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '用户ID', value: 'userId' },
//   { text: '名称', value: 'name' },
  { text: '状态', value: 'status', transform: (status : 'end' | 'start') => status === 'end' ? '已结束' : '进行中' },
  { text: '试卷', value: 'paper', transform: (paper : any) => paper.name },
  { text: '开始时间', value: 'startTime', type: 'time' },
  { text: '结束时间', value: 'endTime', type: 'time' },
  { text: '分数', value: 'score' }
]

const url = '/api/test/exam'
</script>

<style scoped></style>
