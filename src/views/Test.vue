<template>
  <div class="fixed top-0 flex size-full items-center">
    <!-- Question progress -->
    <div class="fixed top-20 w-full">
      <div class="container mx-auto h-2 rounded-full bg-gray-200">
        <div
          class="h-2 rounded-full bg-primary-500 transition-all"
          :style="{
            width: `${((questionIndex + 1) / questions.length) * 100}%`
          }"
        ></div>
      </div>
    </div>
    <!-- Question display -->
    <Transition name="slide" mode="out-in">
      <PHQuestion
        :key="currentQuestion.id"
        v-model:selectedOption="selectedOption"
        v-model:textAnswer="textAnswer"
        :question-id="currentQuestion.id"
        :text="currentQuestion.text"
        :type="currentQuestion.type"
        :options="currentQuestion.options!"
        @submit-answer="submitAnswer"
      />
    </Transition>
    <!-- Question navigation -->
    <div class="fixed bottom-0 w-full bg-white p-4">
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
import PHQuestion from '../components/PHQuestion.vue'
import { ref } from 'vue'

const questions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    type: 'mcq',
    options: [
      { id: 1, text: 'Paris' },
      { id: 2, text: 'London' },
      { id: 3, text: 'Berlin' }
    ]
  },
  {
    id: 2,
    text: 'What is 2 + 2?',
    type: 'text'
  }
]

const currentQuestion = ref(questions[0])
const selectedOption = ref(0)
const textAnswer = ref('')
const questionIndex = ref(0)

const nextQuestion = () => {
  if (questionIndex.value === questions.length - 1) {
    alert('This is the last question')
    return
  }
  questionIndex.value++
  currentQuestion.value = questions[questionIndex.value]
}

const prevQuestion = () => {
  if (questionIndex.value === 0) {
    alert('This is the first question')
    return
  }
  questionIndex.value--
  currentQuestion.value = questions[questionIndex.value]
}

const submitAnswer = () => {
  if (currentQuestion.value.type === 'mcq') {
    alert(`You selected option ${selectedOption.value}`)
  } else {
    alert(`You entered: ${textAnswer.value}`)
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.3s,
    opacity 0.3s;
}
.slide-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}
.slide-enter-from {
  transform: translateX(30%);
  opacity: 0;
}
</style>
