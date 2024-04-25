<!-- <template>
  <div
    class="flex h-full flex-col rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500"
  >
    <PHTableCaption
      :title="title"
      :button-name="buttonName"
      :add-item="addItem"
    />
    <PHDataTable v-model="page" :headers="tableHeaders">
      <template #default>
        <tr
          v-for="adminCase in page.content"
          :key="adminCase.id"
          class="hover:cursor-pointer hover:bg-secondary-50 hover:dark:bg-dark-block-400"
          @click="goRevise(adminCase.id)"
        >
          <td class="px-6 py-4">{{ adminCase.id }}</td>
          <td class="px-6 py-4">{{ adminCase.name }}</td>
          <td class="px-6 py-4">
            {{ new Date(adminCase.submitTime).toLocaleString() }}
          </td>
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
    @revise-item="goRevise"
  >
  </PHManagement>
</template>

<script setup lang="ts">
import PHManagement from './PHManagement.vue'
import router from '../router'
import { useCaseStore } from '../stores/case'

const title = '病例管理'
const buttonName = '添加病例'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '病例名称', value: 'name' },
  { text: '提交时间', value: 'submitTime', type: 'time' }
]
const url = '/api/cases'

const caseStore = useCaseStore()

const goRevise = (id: number) => {
  router.push(`/case-revise/${id}`)
}

const addItem = async () => {
  const newCaseId = await caseStore.createCase();
  router.push(`/case-revise/${newCaseId}`)
}
</script>

<style scoped></style>
