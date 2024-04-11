<template>
  <div>
    <div
      class="mx-4 border-b-2 border-gray-300 py-3 text-lg text-black dark:border-zinc-500 dark:text-gray-200"
    >
      我的考试
    </div>
    <div class="pb-2">
      <div
        v-for="(item, index) in store.myExamInfo?.content"
        :key="index"
        class="mx-4 border-b border-gray-400 px-1 py-3"
      >
        <div>{{ item.name }}</div>
        <div>{{ item.score??0  }}分</div>
      </div>
      <!-- 翻页 -->
      <div>
        <PHPageination
          v-model="currentPage"
          :total-pages="store.myExamInfo?.totalPages"
          @prev-page="updateExaminationList(currentPage)"
          @next-page="updateExaminationList(currentPage)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/user'
import PHPageination from './PHPagination.vue'
const store = useUserStore()
onMounted(() => {
  store.getMyExam(0, 10)
})

const currentPage = ref(0)

const updateExaminationList = (currentPage: number) => {
  store.getCollectedCase(currentPage, 10)
}
</script>
