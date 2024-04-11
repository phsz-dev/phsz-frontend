<template>
  <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500">
    <PHTableCaption :title="title" />
    <div class="relative my-5 overflow-x-auto">
      <PHDataTable v-model="page.pageNumber" :headers="tableHeaders" :total-pages="page.totalPages">
        <template #default>
          <tr v-for="medicine in page.content" :key="medicine.id">
            <td class="px-6 py-4">{{ medicine.id }}</td>
            <td class="px-6 py-4">{{ medicine.name }}</td>
            <td class="px-6 py-4">{{ medicine.type }}</td>
            <td class="px-6 py-4">{{ medicine.usage }}</td>
            <td class="px-6 py-4">{{ medicine.medicineDosage }}</td>
            <td class="px-6 py-4">{{ medicine.price }}</td>
            <td class="px-6 py-4">{{ medicine.batchNumber }}</td>
            <td class="px-6 py-4">{{ medicine.validity }}</td>
          </tr>
        </template>
      </PHDataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import PHTableCaption from '../components/PHTableCaption.vue'
import PHDataTable from '../components/PHDataTable.vue'
import Medicine from '../types/Medicine';
import { usePage } from '../composables';

const title = '药品管理';
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '药品名称', value: 'name' },
  { text: '类型', value: 'type' },
  { text: '用法', value: 'usage' },
  { text: '药品剂量', value: 'medicineDosage' },
  { text: '价格', value: 'price' },
  { text: '批号', value: 'batchNumber' },
  { text: '有效期', value: 'validity' },
]

const { page } = usePage<Medicine>('/api/medicines', 10)
</script>

<style scoped></style>