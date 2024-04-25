<template>
  <div class="flex flex-col flex-1 h-10">
    <PHSearchBar :placeholder="'phrase in:field1,field2'" />
    <div class="flex-1 overflow-scroll">
      <table
        class="w-full flex-1 overflow-scroll text-left text-sm text-black dark:text-gray-200"
      >
        <thead>
          <tr>
            <th
              v-for="header in props.headers"
              :key="header.value"
              scope="col"
              class="group cursor-pointer items-center justify-between px-6 py-3 h-10 select-none"
              :class="{ 'dark:bg-dark-block-400 bg-secondary-50': sortKey === header.value }"
              @click="sortBy(header.value)"
            >
              {{ header.text }}
              <span v-if="sortKey === header.value">
                <span v-if="sortOrder === 1">↑</span>
                <span v-else-if="sortOrder === -1">↓</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <slot></slot>
        </tbody>
      </table>
    </div>

    <PHPagination
      v-model="page.pageNumber"
      :total-pages="page.totalPages"
      class="mt-0"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHSearchBar from '../components/PHSearchBar.vue'
import PHPagination from '../components/PHPagination.vue'
import Page from '../types/Page'

const props = defineProps<{
  headers: Array<{
    text: string
    value: string
  }>
}>()

const page = defineModel<Page<any>>({ required: true })
const sortKey = ref('')
const sortOrder = ref(0) // 0: 无序, 1: 升序, -1: 降序

const sortBy = (key: string) => {
  sortKey.value = key
  // [0, 1, -1]中循环
  sortOrder.value = ((sortOrder.value + 2) % 3) - 1
  if (sortOrder.value === 0) {
    sortKey.value = ''
    page.value.orderColumn = ''
    page.value.orderType = ''
    return
  }
  page.value.orderColumn = sortKey.value
  page.value.orderType = sortOrder.value == 1 ? 'ASC' : 'DESC'
}
</script>

<style scoped></style>
