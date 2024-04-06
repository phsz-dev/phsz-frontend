<template>
  <div class="fixed top-0 flex size-full items-center">
    <!-- Question progress -->
    <div class="absolute top-20 w-full">
      <div class="container mx-auto h-2 rounded-full bg-gray-200">
        <div
          v-if="questions.length"
          class="h-2 rounded-full bg-primary-500 transition-all"
          :style="{
            width: `${((questionIndex + 1) / questions.length) * 100}%`
          }"
        ></div>
      </div>
    </div>
    <div class="container mx-auto flex h-2/3 items-center">
      <!-- Question jump navigation -->
      <div class="flex-none grid h-full grid-cols-5 content-start gap-2 border-r-2 p-4">
        <button
          v-for="(question, index) in questions"
          :key="question.id"
          class="w-8 p-2 text-gray-600 border overflow-hidden border-gray-200 rounded"
          :class="{ 'text-primary-500': index === questionIndex }"
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
          :question-id="currentQuestion.id"
          :text="currentQuestion.text"
          :type="currentQuestion.type"
          :options="currentQuestion.options!"
          @submit-answer="submitAnswer"
        />
        <!-- Loading -->
        <div v-else class="flex h-full w-full items-center justify-center">
          <div
            class="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-primary-500"
          ></div>
        </div>
      </Transition>
    </div>
    <!-- Question navigation -->
    <div class="absolute bottom-0 w-full bg-white p-4">
      <div class="container mx-auto flex justify-between">
        <button
          class="px-4 py-2 text-gray-600 hover:text-gray-800"
          @click="prevQuestion"
        >
          上一题
        </button>
        <button
          class="px-4 py-2 text-gray-600 hover:text-gray-800"
          @click="nextQuestion"
        >
          下一题
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { usePaperStore } from '../stores/paper'

import PHQuestion from '../components/PHQuestion.vue'
import { Paper, Question } from '../types/paper'

const route = useRoute()
const paperStore = usePaperStore()

const paperId = Number(route.params.id)
const paper = ref<Paper | null>(null)
const questions = computed<Question[]>(() => paper.value?.questions ?? [])

const answers = ref<(number | string)[]>([])
const questionIndex = ref(0)
const currentQuestion = computed(() => {
  return questions.value[questionIndex.value]
})

onMounted(async () => {
  onbeforeunload = (event) => {
    event.preventDefault()
  }
  try {
    paper.value = await paperStore.getPaper(paperId)
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
