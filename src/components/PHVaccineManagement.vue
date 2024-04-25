<template>
  <PHManagement
    v-model="vaccineModal"
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
  >
    <PHVaccineForm ref="vaccineForm" />
  </PHManagement>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHManagement from './PHManagement.vue'
import PHVaccineForm from '../components/PHVaccineForm.vue'
import { createModalConfig } from '../utils/ModalConfig'

const title = '疫苗管理'
const buttonName = '添加疫苗'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '疫苗名称', value: 'name' },
  { text: '生产厂家', value: 'manufacturer' },
  { text: '价格', value: 'price' },
  { text: '过期时间', value: 'expiryDate', type: 'time' }
]
const url = '/api/vaccines'

const vaccineForm = ref<InstanceType<typeof PHVaccineForm>>()

const vaccineModal = createModalConfig(
  buttonName,
  async () => {
    await vaccineForm.value?.submit()
  },
)

const addItem = () => {
  vaccineModal.value.show = true
}
</script>

<style scoped></style>
