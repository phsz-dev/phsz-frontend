<template>
  <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500">
    <PHTableCaption :title="title" />
    <PHDataTable
        v-model="page.pageNumber"
        :headers="tableHeaders"
        :total-pages="page.totalPages"
      >
        <template #default>
          <tr v-for="adminCase in page.content" :key="adminCase.id" class="hover:dark:bg-dark-block-400 hover:cursor-pointer hover:bg-secondary-50" @click="goRevise(adminCase.id)">
              <td class="px-6 py-4">{{ adminCase.id }}</td>
              <td class="px-6 py-4">{{ adminCase.name }}</td>
              <td class="px-6 py-4">{{ new Date(adminCase.submitTime).toLocaleString() }}</td>
          </tr>
        </template>
      </PHDataTable>
  </div>
</template>

<script setup lang="ts">
import PHTableCaption from '../components/PHTableCaption.vue'
import PHDataTable from '../components/PHDataTable.vue'
import {usePage} from '../composables'
import AdminCase from '../types/AdminCase'
import router from '../router';


const { page } = usePage<AdminCase>('/api/cases', 10)

const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '病例名称', value: 'name' },
  { text: '提交时间', value: 'submitTime' },
]

const goRevise = (id: number) => {
  router.push(`/case-revise/${id}`)
}

const title = '病例管理'
</script>

<style scoped></style>
