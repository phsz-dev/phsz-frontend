<template>
  <PHManagement
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
  >
    <!-- <PHDocumentForm ref="documentForm" /> -->
  </PHManagement>
</template>

<script setup lang="ts">
import PHManagement from './PHManagement.vue'

const title = '知识库'
const buttonName = '添加知识'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '内容', value: 'page_content' }
]
const url = '/api/docs'

const addItem = () => {
    console.log('add item')
}
</script>