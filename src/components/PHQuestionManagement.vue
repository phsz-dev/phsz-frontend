<template>
  <PHManagement
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
  >
    <!-- <PHQuestionForm ref="questionForm" /> -->
  </PHManagement>
</template>

<script setup lang="ts">
import PHManagement from './PHManagement.vue'

const title = '题目管理'
const buttonName = '添加题目'
const addItem = () => {
  console.log('add item')
}
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '类型', value: 'type', transform: (type : 'mcq' | 'text') => type === 'mcq' ? '选择题' : '文本题' },
  { text: '题面', value: 'text' }
]
const url = '/api/test/question'
</script>