<template>
  <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500">
    <PHTableCaption :title="title" />
    <PHDataTable v-model="page.pageNumber" :headers="tableHeaders" :total-pages="page.totalPages">
      <template #default>
        <tr v-for="charge in page.content" :key="charge.id">
          <td class="px-6 py-4">{{ charge.id }}</td>
          <td class="px-6 py-4">{{ charge.details }}</td>
          <td class="px-6 py-4">{{ charge.date }}</td>
        </tr>
      </template>
    </PHDataTable>
  </div>
</template>

<script setup lang="ts">
import PHTableCaption from '../components/PHTableCaption.vue'
import PHDataTable from '../components/PHDataTable.vue'
import Charge from '../types/Charge';
import { usePage } from '../composables';

const title = '收费管理'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '详情', value: 'details' },
  { text: '日期', value: 'date' }
]

const { page } = usePage<Charge>('/api/charges', 10)
</script>

<style scoped></style>