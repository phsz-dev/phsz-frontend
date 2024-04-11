<template>
  <div
    class="fixed left-0 top-0 flex size-full flex-col items-center justify-center p-4"
  >
    <div v-if="paperInfo" class="w-full max-w-lg">
      <!-- Exam header -->
      <div
        class="flex flex-col items-center rounded-lg bg-white p-6 shadow-md dark:bg-dark-block-600"
      >
        <h1 class="text-2xl font-bold dark:text-gray-50">
          {{ paperInfo.name }}
        </h1>
        <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">
          考试时间：{{ paperInfo.durationSeconds / 60 }}分钟
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300">
          总分：{{ paperInfo.totalScore }}
        </p>
        <button
          class="mt-4 rounded bg-primary-500 px-4 py-2 text-white enabled:hover:bg-primary-600 disabled:bg-gray-300 disabled:text-gray-500"
          :disabled="!userStore.isLogged"
          @click="startExam"
        >
          {{ userStore.isLogged ? '开始考试' : '请先登录' }}
        </button>
      </div>

      <!-- Exam instructions -->
      <div
        class="mt-4 rounded-lg bg-white p-6 shadow-md dark:bg-dark-block-600"
      >
        <h2 class="text-lg font-semibold dark:text-gray-50">考试须知</h2>
        <p class="text-sm text-gray-800 dark:text-gray-200">
          {{ paperInfo.content }}
        </p>
      </div>
    </div>
    <div v-else-if="!failed">
      <PHLoadingIcon />
    </div>
    <div v-else>
      <p class="text-red-500">试卷不存在</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router'
import { useUserStore } from '../stores/user'
import { usePaperStore } from '../stores/paper'
import { useMessageStore } from '../stores/message'
import { Paper } from '../types/paper'
import HTTPError from '../types/error'
import Message from '../types/message'
import PHLoadingIcon from '../components/PHLoadingIcon.vue'

const route = useRoute()

const userStore = useUserStore()
const paperStore = usePaperStore()
const msgStore = useMessageStore()

const paperId = Number(route.params.id)

const paperInfo = ref<Paper | null>(null)
const failed = ref(false)

onMounted(async () => {
  try {
    paperInfo.value = await paperStore.getPaperInfo(paperId)
  } catch (error) {
    if (error instanceof HTTPError) {
      failed.value = true
    }
  }
})

// const testDetails = {
//   name: '试卷一',
//   time: 60,
//   totalMarks: 100,
//   instructions: '请在规定时间内完成试卷，否则系统将自动提交。'
// }

const startExam = async () => {
  try {
    const exam = await paperStore.startExam(paperId, userStore.token!)
    router.push(`/test/${exam.id}`)
  } catch (error) {
    if (error instanceof HTTPError) {
      msgStore.addMessage(
        Message.fullMessage(
          ['', '试卷未找到', '你还有一场正在进行的考试'][error.code],
          1000,
          'error',
          'top'
        )
      )
    }
  }
}
</script>
