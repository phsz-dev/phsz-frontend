<template>
    <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500 flex-col flex">
      <PHModal v-model="assayModal">
        <template #default>
          <PHAssayForm ref="assayForm"/>
        </template>
      </PHModal>
      <PHTableCaption :title="title" :button-name="buttonName" :add-item="addItem"/>
      <PHDataTable
        v-model="page"
        :headers="tableHeaders"
        :total-pages="page.totalPages"
      >
        <template #default>
          <tr v-for="doc in page.content" :key="doc.id">
            <td class="px-6 py-4">{{ doc.id }}</td>
            <td class="px-6 py-4">{{ doc.page_content }}</td>
          </tr>
        </template>
      </PHDataTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import PHModal from '../components/PHModal.vue'
  import PHAssayForm from '../components/PHAssayForm.vue'
  import PHTableCaption from '../components/PHTableCaption.vue'
  import PHDataTable from '../components/PHDataTable.vue'
  import { Document } from '../types'
  import { usePage } from '../composables'
  import { ref } from 'vue'
  import { createModalConfig } from '../utils/ModalConfig'
  
  const title = '知识库'
  const buttonName = '添加知识'
  const tableHeaders = [
    { text: 'ID', value: 'id' },
    { text: '内容', value: 'page_content' }
  ]
  
  const { page } = usePage<Document>('/api/docs', 10)
  
  const assayForm = ref<InstanceType<typeof PHAssayForm>>()
  
  const assayModal = createModalConfig(
    '添加知识', 
    async () => {
      await assayForm.value?.submit()
    },
  )
  
  const addItem = () => {
    assayModal.value.show = true
  }
  </script>
  
  <style scoped></style>
  