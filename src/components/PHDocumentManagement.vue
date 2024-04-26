<template>
  <PHManagement
    v-model="documentModal"
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
    @revise-item="reviseItem"
  >
    <PHDocumentForm ref="documentForm" @submit="refresh" />
  </PHManagement>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../router'
import PHDocumentForm from './PHDocumentForm.vue'
import PHManagement from './PHManagement.vue'
import { createModalConfig } from '../utils/ModalConfig';

const title = '知识库'
const buttonName = '添加知识'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  {
    text: '内容',
    value: 'page_content',
    transform: (content: string) =>
      content.length > 100 ? content.slice(0, 100) + '...' : content
  }
]
const url = '/api/docs'

const documentForm = ref<InstanceType<typeof PHDocumentForm>>()

const documentModal = createModalConfig(buttonName, async () => {
  await documentForm.value?.submit()
})

const addItem = () => {
    documentModal.value.show = true
}

const reviseItem = async (id: number) => {
    documentModal.value.show = true
  // 等到documentForm组件显示后再调用revise方法
  while (!documentForm.value) {
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
  await documentForm.value?.revise(id)
}

const refresh = () => {
  // 刷新页面
  router.go(0)
}
</script>
