<template>
  <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500 flex-col flex">
    <PHTableCaption :title="title" :button-name="buttonName" :add-item="addItem" />
    <PHDataTable
      v-model="page"
      :headers="tableHeaders"
      :total-pages="page.totalPages"
    >
      <template #default>
        <tr v-for="medicine in page.content" :key="medicine.id">
            <td class="w-[5%] px-6 py-4">{{ medicine.id }}</td>
            <td class="w-[15%] px-6 py-4">{{ medicine.name }}</td>
            <td class="w-[10%] px-6 py-4">{{ medicine.type }}</td>
            <td class="w-[15%] px-6 py-4">{{ medicine.usage }}</td>
            <td class="w-[10%] px-6 py-4">{{ medicine.price }}</td>
            <td class="w-[10%] px-6 py-4">{{ medicine.batchNumber }}</td>
            <td class="w-[10%] px-6 py-4">{{ new Date(medicine.validity).toLocaleDateString() }}</td>
        </tr>
      </template>
    </PHDataTable>
  </div>
</template>

<script setup lang="ts">
import PHTableCaption from '../components/PHTableCaption.vue'
import PHDataTable from '../components/PHDataTable.vue'
import Medicine from '../types/medicine'
import { usePage } from '../composables'

const title = '药品管理'
const buttonName = '添加药品'
const addItem = () => {
  console.log('add item')
}
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '药品名称', value: 'name' },
  { text: '类型', value: 'type' },
  { text: '用法', value: 'usage' },
  { text: '价格', value: 'price' },
  { text: '批号', value: 'batchNumber' },
  { text: '有效期', value: 'validity' }
]

const { page } = usePage<Medicine>('/api/medicines', 10)
</script>

<style scoped></style>
