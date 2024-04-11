<template>
  <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500">
    <PHTableCaption :title="title" />
    <PHDataTable v-model="page.pageNumber" :headers="tableHeaders" :total-pages="page.totalPages">
      <template #default>
        <tr v-for="assay in page.content" :key="assay.id">
          <td class="px-6 py-4">{{ assay.id }}</td>
          <td class="px-6 py-4">{{ assay.name }}</td>
          <td class="px-6 py-4">{{ assay.type }}</td>
          <td class="px-6 py-4" v-html="assay.description"></td>
          <td class="px-6 py-4">{{ assay.price }}</td>
          <td class="px-6 py-4">{{ assay.date }}</td>
        </tr>
      </template>
    </PHDataTable>
  </div>
</template>

<script setup lang="ts">
import PHTableCaption from '../components/PHTableCaption.vue'
import PHDataTable from '../components/PHDataTable.vue'
import Assay from '../types/assay';
import { usePage } from '../composables';

const title = '检查管理'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '检查名称', value: 'name' },
  { text: '类型', value: 'type' },
  { text: '描述', value: 'description' },
  { text: '价格', value: 'price' },
  { text: '修改时间', value: 'date' }
]

const { page } = usePage<Assay>('/api/assays', 10)
</script>

<style scoped></style>