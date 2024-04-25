<template>
  <PHManagement
    v-model="medicineModal"
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
import { ref } from 'vue'
import PHManagement from './PHManagement.vue'
import PHMedicineForm from './PHMedicineForm.vue'
import { createModalConfig } from '../utils/ModalConfig'

const title = '药品管理'
const buttonName = '添加药品'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '药品名称', value: 'name' },
  { text: '类型', value: 'type' },
  { text: '用法', value: 'usage' },
  { text: '价格', value: 'price' },
  { text: '批号', value: 'batchNumber' },
  { text: '有效期', value: 'validity', type: 'time' }
]
const url = '/api/medicines'

const medicineForm = ref<InstanceType<typeof PHMedicineForm>>()

const medicineModal = createModalConfig(buttonName, async () => {
  await medicineForm.value?.submit()
})

const addItem = () => {
  medicineModal.value.show = true
}
</script>