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
        <tr v-for="assay in page.content" :key="assay.id">
          <td class="px-6 py-4">{{ assay.id }}</td>
          <td class="px-6 py-4">{{ assay.name }}</td>
          <td class="px-6 py-4">{{ assay.type }}</td>
          <td class="px-6 py-4">{{ assay.price }}</td>
          <td class="px-6 py-4">{{ new Date(assay.date ?? '').toLocaleDateString() }}</td>
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
import Assay from '../types/assay'
import { usePage } from '../composables'
import { ref } from 'vue'
import { createModalConfig } from '../utils/ModalConfig'

const title = '检查管理'
const buttonName = '添加检查'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '检查名称', value: 'name' },
  { text: '类型', value: 'type' },
  { text: '价格', value: 'price' },
  { text: '修改时间', value: 'date' }
]

const { page } = usePage<Assay>('/api/assays', 10)

const assayForm = ref<InstanceType<typeof PHAssayForm>>()

const assayModal = createModalConfig(
  '添加检查', 
  async () => {
    await assayForm.value?.submit()
  },
)

const addItem = () => {
  assayModal.value.show = true
}
</script>

<style scoped></style>
