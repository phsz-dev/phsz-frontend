<template>
  <PHManagement
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
  >
    <PHMedicineForm ref="medicineForm" />
  </PHManagement>
</template>

<script setup lang="ts">
import PHManagement from './PHManagement.vue'

const title = '疫苗管理'
const buttonName = '添加疫苗'
const addItem = () => {
  console.log('add item')
}
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '疫苗名称', value: 'name' },
  { text: '生产厂家', value: 'manufacturer' },
  { text: '价格', value: 'price' },
  { text: '过期时间', value: 'expiryDate', type: 'time' }
]
const url = '/api/vaccines'
</script>

<style scoped></style>
