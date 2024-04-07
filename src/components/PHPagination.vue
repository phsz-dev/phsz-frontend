<template>
  <div class="pagination">
    <button @click="gotoPage(currentPage - 1)" :disabled="currentPage === 1">
      上一页
    </button>
    <button
      v-for="page in pageNumbers"
      :key="page"
      @click="gotoPage(page)"
      :disabled="currentPage === page"
    >
      {{ page }}
    </button>
    <button
      @click="gotoPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      下一页
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  total: number
  pageSize: number
}>()

const emit = defineEmits(['update:page'])

const currentPage = ref(1)

const totalPages = computed(() => {
  return Math.ceil(props.total / props.pageSize)
})

// 生成页码数组
const pageNumbers = computed(() => {
  const pages = []
  const totalNumbers = 5 // 在当前页码周围显示的页码数量
  const halfWay = Math.floor(totalNumbers / 2)
  const startPage = Math.max(1, currentPage.value - halfWay)
  const endPage = Math.min(totalPages.value, startPage + totalNumbers - 1)

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
})

// 跳转到指定页码
function gotoPage(page: number) {
  if (page !== currentPage.value && page > 0 && page <= totalPages.value) {
    currentPage.value = page
    emit('update:page', page)
  }
}
</script>

<style>
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
