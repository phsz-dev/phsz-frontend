<template>
  <div class="fixed top-0 flex size-full items-center">
    <!-- Countdown -->
    <div class="absolute top-20 w-full px-2">
      <div
        class="container relative mx-auto flex h-2 rounded-full bg-gray-200 dark:bg-dark-block-400"
      >
        <div
          v-if="questions.length"
          class="h-2 rounded-full bg-primary-500 transition-all"
          :style="{
            width: `${countdownPercentage}%`
          }"
        ></div>
      </div>
      <!-- remaining time -->
      <div class="container mx-auto mt-2 flex justify-between">
        <div class="text-gray-600 dark:text-gray-200">
          {{ questionIndex + 1 }} / {{ questions.length }}
        </div>
        <div class="text-gray-600 dark:text-gray-200 text-lg font-bold">
          {{ remainingTime }}
        </div>
      </div>
    </div>
    <div class="container mx-auto flex h-2/3 flex-col items-center sm:flex-row">
      <!-- Question jump navigation -->
      <div
        class="grid flex-none grid-cols-10 content-start gap-2 p-4 sm:h-full sm:grid-cols-5 lg:border-r-2 dark:border-dark-block-600"
      >
        <button
          v-for="(question, index) in questions"
          :key="question.sequence"
          class="w-8 overflow-hidden rounded border-2 border-gray-200 p-2 text-gray-600 dark:border-dark-block-600 dark:text-gray-200"
          :class="{
            'text-primary-500 dark:text-primary-600': index === questionIndex,
            // 在当前题面前面且答案为空标黄
            'border-yellow-300 dark:border-yellow-700': index < questionIndex && !answers[index],
            // 不然标绿
            'border-green-300 dark:border-green-700': answers[index]
          }"
          @click="jumpToQuestion(index)"
        >
          {{ index + 1 }}
        </button>
      </div>
      <!-- Question display -->
      <Transition name="slide" mode="out-in">
        <PHQuestion
          v-if="currentQuestion"
          :key="currentQuestion.sequence"
          v-model:selectedOption="answers[questionIndex]"
          v-model:textAnswer="answers[questionIndex]"
          :paper-question="currentQuestion"
          @submit-answer="submitAnswer"
        />
        <!-- Loading -->
        <div v-else class="flex h-full w-full items-center justify-center">
          <PHLoadingIcon />
        </div>
      </Transition>
    </div>
    <!-- Question navigation -->
    <PHQuestionNavigator
      v-model="questionIndex"
      :total-questions="questions.length"
      @submit="submitAnswer"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'

import PHQuestion from '../components/PHQuestion.vue'
import PHQuestionNavigator from '../components/PHQuestionNavigator.vue'
import PHLoadingIcon from '../components/PHLoadingIcon.vue'
import { Exam, PaperQuestion } from '../types/paper'
import { useUserStore } from '../stores/user'
import { usePaperStore } from '../stores/paper'

const route = useRoute()
const userStore = useUserStore()
const paperStore = usePaperStore()

const examId = Number(route.params.id)
const exam = ref<Exam | null>(null)
const questions = computed<PaperQuestion[]>(
  () => exam.value?.paper.questions ?? []
)

const answers = ref<(number | string)[]>([])
const questionIndex = ref(0)
const currentQuestion = computed(() => {
  return questions.value[questionIndex.value]
})

// Countdown

const formatTime = (days: number, hours: number, minutes: number, seconds: number) => {
  const pad = (num: number) => String(num).padStart(2, '0');
  
  let timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  if (days) {
    timeString = `${days} 天 ` + timeString;
  }
  
  return timeString;
}

const countdownPercentage = ref(0)
const secondsRemaining = ref(0)
const remainingTime = computed(() => {
  const days = Math.floor(secondsRemaining.value / 86400)
  const hours = Math.floor((secondsRemaining.value % 86400) / 3600)
  const minutes = Math.floor((secondsRemaining.value % 3600) / 60)
  const seconds = secondsRemaining.value % 60
  return formatTime(days, hours, minutes, seconds)
})

const updateCountdown = () => {
  if (!exam.value) return
  // 从 startTime endTime, new Date 里面取
  const now = new Date()
  const startTime = new Date(exam.value!.startTime)
  const endTime = new Date(exam.value!.endTime)
  const duration = endTime.getTime() - startTime.getTime()
  const elapsed = now.getTime() - startTime.getTime()
  countdownPercentage.value = (elapsed / duration) * 100
  // 还剩 x 天 x 小时 x 分钟 x 秒
  secondsRemaining.value = Math.max(
    0,
    Math.floor((endTime.getTime() - now.getTime()) / 1000)
  )
}

const startCountdown = () => {
  const intervalId = setInterval(updateCountdown, 1000)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
}

onMounted(async () => {
  onbeforeunload = (event) => {
    event.preventDefault()
  }
  onUnmounted(() => {
    onbeforeunload = null
  })
  try {
    startCountdown()
    exam.value = await paperStore.getExam(examId, userStore.token!)
    updateCountdown()
    console.log(exam.value)
    answers.value = Array(questions.value.length).fill('')
  } catch (e) {
    console.log(e)
  }
})

onBeforeRouteLeave(() => {
  return confirm('你所做的更改可能未保存。')
})

const jumpToQuestion = (index: number) => {
  if (index < 0 || index >= questions.value.length) {
    alert('Invalid question index')
    return
  }
  questionIndex.value = index
}

const submitAnswer = () => {
  alert(`Submit answer: ${answers.value}`)
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s;
}
.slide-leave-to {
  transform: translateX(-10%);
  opacity: 0;
}
.slide-enter-from {
  transform: translateX(10%);
  opacity: 0;
}
</style>
