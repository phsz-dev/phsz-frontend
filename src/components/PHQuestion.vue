<template>
  <div class="mx-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-md">
    <h2 class="text-lg font-semibold">问题 {{ question.id }}</h2>
    <p class="my-6 mt-2 text-sm text-gray-800">{{ question.text }}</p>
    <!-- Multiple choice example -->
    <div v-if="question.type === 'mcq'">
      <div v-for="option in question.options" :key="option.id">
        <label
          :for="`option-${option.id}`"
          class="my-2 flex items-center rounded border p-4 hover:bg-gray-50 has-[:checked]:border-primary-600"
        >
          <input
            :id="`option-${option.id}`"
            v-model="selectedOption"
            class="mr-2 box-content size-1.5 appearance-none rounded-lg border-[4px] border-transparent ring-1 ring-primary-500 checked:border-primary-500"
            type="radio"
            :value="option.id"
          />
          {{ option.text }}
        </label>
      </div>
    </div>
    <!-- Free text example -->
    <div v-else-if="question.type === 'text'">
      <textarea
        v-model="textAnswer"
        rows="4"
        class="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-primary-500"
      ></textarea>
    </div>
    <!-- <button
      class="hover:bg-primary-700 mt-4 rounded bg-primary-600 px-4 py-2 text-white"
      @click="$emit('submitAnswer', selectedOption, textAnswer)"
    >
      提交答案
    </button> -->
  </div>
</template>

<script setup lang="ts">
import { Question } from '../types/paper'

defineProps<{
  question: Question
}>()

const selectedOption = defineModel<number | string>('selectedOption')
const textAnswer = defineModel<number | string>('textAnswer')

defineEmits(['submitAnswer'])
</script>
