<!-- <template>
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
  </template> -->
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