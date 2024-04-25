<template>
  <PHManagement
    v-model="assayModal"
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
    @revise-item="reviseItem"
  >
    <PHAssayForm ref="assayForm" @submit="refresh" />
  </PHManagement>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHManagement from './PHManagement.vue'
import PHAssayForm from '../components/PHAssayForm.vue'
import { createModalConfig } from '../utils/ModalConfig'
import router from '../router';

const title = '检查管理'
const buttonName = '添加检查'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '检查名称', value: 'name' },
  { text: '类型', value: 'type' },
  { text: '价格', value: 'price' },
  { text: '修改时间', value: 'date', type: 'time' }
]
const url = '/api/assays'

const assayForm = ref<InstanceType<typeof PHAssayForm>>()

const assayModal = createModalConfig(
  buttonName,
  async () => {
    await assayForm.value?.submit()
  },
)

const addItem = () => {
  assayModal.value.show = true
}

const reviseItem = async (id: number) => {
  assayModal.value.show = true
  // 等到assayForm组件显示后再调用revise方法
  while (!assayForm.value) {
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
  await assayForm.value?.revise(id)
}

const refresh = () => {
  // 刷新页面
  router.go(0)
}
</script>