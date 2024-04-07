<template>
  <div class="fixed top-0 flex size-full items-center">
    <!-- Countdown -->
    <div class="absolute top-20 w-full px-2">
      <div
        class="relative container mx-auto h-2 rounded-full bg-gray-200 dark:bg-dark-block-400 flex"
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
      <div class="container mx-auto flex justify-between mt-2">
        <div class="text-gray-600 dark:text-gray-200">
          {{ questionIndex + 1 }} / {{ questions.length }}
        </div>
        <div class="text-gray-600 dark:text-gray-200">
          剩余时间: {{ remainingTime }}
        </div>
      </div>
    </div>
    <div class="container mx-auto flex h-2/3 flex-col items-center sm:flex-row">
      <!-- Question jump navigation -->
      <div
        class="grid flex-none grid-cols-10 sm:grid-cols-5 content-start gap-2 lg:border-r-2 p-4 sm:h-full dark:border-dark-block-600"
      >
        <button
          v-for="(question, index) in questions"
          :key="question.id"
          class="w-8 overflow-hidden rounded border border-gray-200 p-2 text-gray-600 dark:border-dark-block-600 dark:text-gray-200"
          :class="{
            'text-primary-500 dark:text-primary-600': index === questionIndex
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
          :key="currentQuestion.id"
          v-model:selectedOption="answers[questionIndex]"
          v-model:textAnswer="answers[questionIndex]"
          :question="currentQuestion"
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
      @prev-question="prevQuestion"
      @next-question="nextQuestion"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { usePaperStore } from '../stores/paper'

import PHQuestion from '../components/PHQuestion.vue'
import PHQuestionNavigator from '../components/PHQuestionNavigator.vue'
import PHLoadingIcon from '../components/PHLoadingIcon.vue'
import { Exam, Question } from '../types/paper'

const route = useRoute()
const paperStore = usePaperStore()

const examId = Number(route.params.id)
const exam = ref<Exam | null>(null)
const questions = computed<Question[]>(() => exam.value?.paper.questions ?? [])

const answers = ref<(number | string)[]>([])
const questionIndex = ref(0)
const currentQuestion = computed(() => {
  return questions.value[questionIndex.value]
})

const countdownPercentage = ref(0)
const secondsRemaining = ref(0)
const remainingTime = computed(() => {
  const days = Math.floor(secondsRemaining.value / 86400)
  const hours = Math.floor((secondsRemaining.value % 86400) / 3600)
  const minutes = Math.floor((secondsRemaining.value % 3600) / 60)
  const seconds = secondsRemaining.value % 60
  if (days) return `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`
  if (hours) return `${hours} 小时 ${minutes} 分钟 ${seconds} 秒`
  if (minutes) return `${minutes} 分钟 ${seconds} 秒`
  return `${seconds} 秒`
})

const startCountdown = () => {

  onUnmounted(() => {
    clearInterval(intervalId)
  })

  const intervalId = setInterval(() => {
    // 从 startTime endTime, new Date 里面取
    const now = new Date()
    const startTime = new Date(exam.value!.startTime)
    const endTime = new Date(exam.value!.endTime)
    const duration = endTime.getTime() - startTime.getTime()
    const elapsed = now.getTime() - startTime.getTime()
    countdownPercentage.value = (elapsed / duration) * 100
    // 还剩 x 天 x 小时 x 分钟 x 秒
    secondsRemaining.value = Math.floor((endTime.getTime() - now.getTime()) / 1000)
  }, 1000)
}

onMounted(async () => {
  onbeforeunload = (event) => {
    event.preventDefault()
  }
  try {
    exam.value = await paperStore.getExam(examId)
    startCountdown()
    answers.value = Array(questions.value.length).fill('')
  } catch (e) {
    console.log(e)
  }
})

onUnmounted(() => {
  onbeforeunload = null
})

onBeforeRouteLeave(() => {
  return confirm('你所做的更改可能未保存。')
})

const nextQuestion = () => {
  if (questionIndex.value === questions.value.length - 1) {
    alert('This is the last question')
    return
  }
  questionIndex.value++
}

const prevQuestion = () => {
  if (questionIndex.value === 0) {
    alert('This is the first question')
    return
  }
  questionIndex.value--
}

const jumpToQuestion = (index: number) => {
  if (index < 0 || index >= questions.value.length) {
    alert('Invalid question index')
    return
  }
  questionIndex.value = index
}

const submitAnswer = () => {
  if (currentQuestion.value!.type === 'mcq') {
    alert(`You selected option ${answers.value}`)
  } else {
    alert(`You entered: ${answers.value}`)
  }
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
