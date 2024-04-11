<template>
  <div
    class="w-full overflow-hidden overflow-y-scroll rounded-md bg-white px-4 py-1 dark:bg-dark-block-500"
    style="height: 98%"
  >
    <div
      v-for="(item, index) in store.roughCases?.content"
      :key="index"
      class="border-b border-gray-300 p-2 py-4 hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      <PHRoughCase :rough-case="item" />
    </div>
    <div class="h-3"></div>
    <!-- 翻页栏 -->
    <div class="mx-auto flex w-1/3 items-center justify-center">
      <div class="flex w-full items-center justify-around">
        <PHPageination
          v-model="currentPage"
          :total-pages="store.roughCases?.totalPages"
          @prev-page="updateCaseList(currentPage)"
          @next-page="updateCaseList(currentPage)"
        />
      </div>
    </div>
    <div class="h-3"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCaseStore } from '../stores/case'
import PHRoughCase from './PHRoughCase.vue'
import PHPageination from './PHPagination.vue'
const props = defineProps<{
  diseaseId: number
}>()
const currentPage = ref(0)

const store = useCaseStore()

onMounted(() => {
  try {
    getRoughCases(currentPage.value, 8)
  } catch (e) {
    console.log(e)
  }
})

const updateCaseList = (currentPage: number) => {
  getRoughCases(currentPage, 8)
}

const getRoughCases = (currentPage: number, pageSize: number) => {
  store.getRoughCaseByDisease(props.diseaseId, currentPage, pageSize)
}
</script>
