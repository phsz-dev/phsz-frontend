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
        class="mx-4 border-b border-gray-400 px-1 py-4 hover:bg-gray-100 hover:dark:bg-dark-block-400"
      >
        <RouterLink :to="'/test-result/' + item.id">
          <div class="flex justify-between dark:text-gray-200">
            <div>{{ item.name }}</div>
            <div class="font-bold">{{ item.score ?? 0 }}分</div>
          </div>
          <div class="flex justify-between dark:text-gray-200 pt-2">
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
          v-model="currentPage"
          :total-pages="store.myExamInfo?.totalPages"
          @prev-page="updateExaminationList(currentPage,0)"
          @next-page="updateExaminationList(currentPage,1)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/user'
import PHPageination from './PHPagination.vue'
import { useMessageStore } from '../stores/message';
import Message from '../types/message';
const store = useUserStore()
const messageStore = useMessageStore()
onMounted(() => {
  store.getMyExam(0, 10)
})

const currentPage = ref(0)

const updateExaminationList = (currentPage: number,type: number) => {
    if(type&&store.myExamInfo?.totalPages && currentPage >= store.myExamInfo?.totalPages-1) {
        messageStore.addMessage(Message.partialMessage('已经是最后一页了', 'warn','top'))
        return
    }
    if(!type&&currentPage == 0) {
        messageStore.addMessage(Message.partialMessage('已经是第一页了', 'warn','top'))
        return
    }
  store.getCollectedCase(currentPage, 10)
}
</script>
