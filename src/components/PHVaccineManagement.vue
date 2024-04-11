<template>
  <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500">
    <PHTableCaption :title="title" />
    <div class="relative my-5 overflow-x-auto">
      <PHDataTable :headers="tableHeaders" :total-pages="store.vaccineList.totalPages" :get-list="getVaccineList" :update-list="updateVaccineList" :sort-list=" store.sortVaccineList">
        <template #default>
          <tr v-for="vaccine in store.vaccineList.content" :key="vaccine.id">
            <td class="px-6 py-4">{{ vaccine.id }}</td>
            <td class="px-6 py-4">{{ vaccine.name }}</td>
            <td class="px-6 py-4">{{ vaccine.manufacturer }}</td>
            <td class="px-6 py-4">{{ vaccine.price }}</td>
            <td class="px-6 py-4">{{ vaccine.expireDate }}</td>
          </tr>
        </template>
      </PHDataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVaccineStore } from '../stores/vaccine'
import PHTableCaption from '../components/PHTableCaption.vue'
import PHDataTable from '../components/PHDataTable.vue'

const title = '疫苗管理'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '疫苗名称', value: 'name' },
  { text: '生产厂家', value: 'manufacturer' },
  { text: '价格', value: 'price' },
  { text: '过期时间', value: 'expireDate' },
]

const store = useVaccineStore()

const getVaccineList = async () => {
  await store.getVaccineList(0, 10)
}

const updateVaccineList = (page: number) => {
  store.getVaccineList(page - 1, 10)
}

getVaccineList()
</script>

<style scoped></style>
