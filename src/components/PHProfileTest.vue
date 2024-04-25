<template>
  <div>
    <div
      class="mx-4 border-b-2 border-gray-300 py-3 text-lg text-black dark:border-zinc-500 dark:text-gray-200"
    >
      我的考试
    </div>
    <div class="pb-2">
      <div
        v-for="(item, index) in page.content"
        :key="index"
        class="mx-4 border-b border-gray-400 px-1 py-4 hover:bg-gray-100 hover:dark:bg-dark-block-400"
      >
        <RouterLink :to="'/test-result/' + item.id">
          <div class="flex justify-between dark:text-gray-200">
            <div>{{ item.name }}</div>
            <div class="font-bold">{{ item.score ?? 0 }}分</div>
          </div>
          <div class="flex justify-between pt-2 dark:text-gray-200">
            <div>
              {{ new Date(item.startTime).toLocaleString() }} -
              {{ new Date(item.endTime).toLocaleString() ?? '至今' }}
            </div>
            <div>{{ item.status == 'end' ? '已结束' : '进行中' }}</div>
          </div>
        </RouterLink>
      </div>
      <!-- 翻页 -->
      <div>
        <PHPageination
          v-model="page.pageNumber"
          :total-pages="page.totalPages"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePage } from '../composables'
import { useUserStore } from '../stores/user'
import PHPageination from './PHPagination.vue'
const store = useUserStore()

const { page } = usePage<any>('/api/test/exam/history', 5, store.token)
</script>
