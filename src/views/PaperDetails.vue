<template>
  <div
    class="fixed left-0 top-0 flex size-full flex-col items-center justify-center"
  >
    <div class="mx-4 max-w-xl">
      <!-- Exam header -->
      <div
        class="flex flex-col items-center rounded-lg bg-white p-6 shadow-md dark:bg-dark-block-600"
      >
        <h1 class="text-2xl font-bold dark:text-gray-50">{{ testDetails.name }}</h1>
        <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">
          考试时间：{{ testDetails.time }}分钟
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300">总分：{{ testDetails.totalMarks }}</p>
        <button
          class="mt-4 rounded bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
          @click="startExam"
        >
          开始考试
        </button>
      </div>

      <!-- Exam instructions -->
      <div class="mt-4 rounded-lg bg-white p-6 shadow-md dark:bg-dark-block-600">
        <h2 class="text-lg font-semibold dark:text-gray-50">考试须知</h2>
        <p class="text-sm text-gray-800 dark:text-gray-200">{{ testDetails.instructions }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 从路由参数中获取试卷ID
import { useRoute } from 'vue-router'
const route = useRoute()
const paperId = Number(route.params.id)

const testDetails = {
  name: '试卷一',
  time: 60,
  totalMarks: 100,
  instructions: '请在规定时间内完成试卷，否则系统将自动提交。'
}

const startExam = () => {
  alert('开始考试')
}
</script>
