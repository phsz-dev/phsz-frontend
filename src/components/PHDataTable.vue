<template>
  <PHSearchBar :placeholder="'phrase in:field1,field2'"/>
  <table class="w-full text-left text-sm text-black dark:text-gray-200">
    <thead>
      <tr>
        <th
          v-for="header in props.headers"
          :key="header.value"
          scope="col"
          class="group cursor-pointer items-center justify-between px-6 py-3"
          :class="{ 'bg-gray-500': sortKey === header.value }"
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
  <PHPagination v-model="currentPage" :total-pages="props.totalPages" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHSearchBar from '../components/PHSearchBar.vue'
import PHPagination from '../components/PHPagination.vue'

const props = defineProps<{
  headers: Array<{
    text: string
    value: string
  }>
  totalPages?: number
  sortList?: Function
  getList?: Function
}>()

const currentPage = defineModel<number>({ required: true })
const sortKey = ref('')
const sortOrder = ref(0) // 0: 无序, 1: 升序, -1: 降序

const sortBy = (key: string) => {
  sortKey.value = key
  // [0, 1, -1]中循环
  sortOrder.value = ((sortOrder.value + 2) % 3) - 1
  if (sortOrder.value === 0) {
    sortKey.value = ''
    props.getList?.()
  } else {
    props.sortList?.(key, sortOrder.value)
  }
}
</script>

<style scoped></style>
