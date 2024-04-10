<template>
  <div>
    <div
      class="mx-4 border-b-2 border-gray-300 py-3 text-lg text-black dark:border-zinc-500 dark:text-gray-200"
    >
      病例收藏
    </div>
    <div class="pb-2">
      <div
        v-for="(item, index) in store.collectPageInfo?.content"
        :key="index"
        class="mx-4 border-b border-gray-400 px-1 py-3"
      >
        <PHRoughCase :rough-case="item" />
      </div>
      <!-- 翻页 -->
      <div>
        <PHPageination
          v-model="currentPage"
          :total-pages="store.collectPageInfo?.totalPages"
          @prev-page="updateCollctedCaseList(currentPage)"
          @next-page="updateCollctedCaseList(currentPage)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/user'
import PHRoughCase from './PHRoughCase.vue'
import PHPageination from './PHPagination.vue'
const store = useUserStore()

const currentPage = ref(1)

const updateCollctedCaseList = (currentPage: number) => {
  store.getCollectedCase(currentPage - 1, 6)
}

onMounted(() => {
  store.getCollectedCase(0, 6)
})
</script>
