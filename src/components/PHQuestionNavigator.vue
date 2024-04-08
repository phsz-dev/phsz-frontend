<template>
  <div class="absolute bottom-0 w-full bg-white p-4 dark:bg-dark-block-600">
    <div class="container mx-auto flex justify-between">
      <button
        class="px-4 py-2 text-gray-600 enabled:hover:text-gray-800 dark:text-gray-200 dark:enabled:hover:text-gray-50 disabled:text-gray-400"
        :disabled="questionIndex === 0"
        @click="prevQuestion"
      >
        上一题
      </button>
      <button
        class="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-50"
        @click="questionIndex + 1 === totalQuestions ? emit('submit') : nextQuestion()"
      >
        {{ questionIndex + 1 === totalQuestions ? '提交' : '下一题' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    totalQuestions: number
}>()

const questionIndex = defineModel<number>({ required: true })

const emit = defineEmits<{
    prevQuestion: []
    nextQuestion: []
    submit: []
}>()

const prevQuestion = () => {
    questionIndex.value > 0 && questionIndex.value--
    emit('prevQuestion')
}

const nextQuestion = () => {
    questionIndex.value < props.totalQuestions - 1 && questionIndex.value++
    emit('nextQuestion')
}
</script>
