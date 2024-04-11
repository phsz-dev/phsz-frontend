<template>
  <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500">
    <PHTableCaption :title="title" />
    <div class="relative my-5 overflow-x-auto">
      <PHDataTable
        v-model="page.pageNumber"
        :headers="tableHeaders"
        :total-pages="page.totalPages"
      >
        <template #default>
          <tr v-for="vaccine in page.content" :key="vaccine.id">
            <td class="px-6 py-4">{{ vaccine.id }}</td>
            <td class="px-6 py-4">{{ vaccine.name }}</td>
            <td class="px-6 py-4">{{ vaccine.manufacturer }}</td>
            <td class="px-6 py-4">{{ vaccine.price }}</td>
            <td class="px-6 py-4">{{ vaccine.expiryDate }}</td>
          </tr>
        </template>
      </PHDataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import PHTableCaption from '../components/PHTableCaption.vue'
import PHDataTable from '../components/PHDataTable.vue'
import Vaccine from '../types/vaccine'
import { usePage } from '../composables'

const title = '疫苗管理'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '疫苗名称', value: 'name' },
  { text: '生产厂家', value: 'manufacturer' },
  { text: '价格', value: 'price' },
  { text: '过期时间', value: 'expireDate' }
]

const { page } = usePage<Vaccine>('/api/vaccines', 10)
</script>

<style scoped></style>
