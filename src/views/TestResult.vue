<template>
  <div class="container mx-auto max-w-2xl p-4">
    <div v-if="exam && exam.status == 'end'">
      <h1 class="mb-4 text-2xl font-bold">{{ exam.name }}</h1>
      <p class="mb-4 text-gray-600 dark:text-gray-200">
        {{ exam.paper.content }}
      </p>
      <div class="mb-4 text-gray-600 dark:text-gray-200">
        得分：{{ exam.score }} / {{ totalScore }}
      </div>
      <div class="space-y-4">
        <div
          v-for="answer in exam.questions"
          :key="answer.question"
          class="mx-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-md dark:bg-dark-block-600"
        >
          <h2 class="text-lg font-semibold dark:text-gray-100">
            问题 {{ questionDetails[answer.question].sequence }}
            <span class="text-sm font-normal"
              >({{ questionDetails[answer.question].score }} 分)</span
            >
          </h2>
          <p class="my-6 mt-2 text-sm text-gray-800 dark:text-gray-200">
            {{ questionDetails[answer.question].question.text }}
          </p>
          <div v-if="questionDetails[answer.question].question.type === 'mcq'">
            <div
              v-for="option in questionDetails[answer.question].question
                .options"
              :key="option.id"
            >
              <label
                :for="`option-${option.id}`"
                class="my-2 flex items-center rounded border p-4 dark:border-dark-block-400 dark:text-gray-200"
                :class="{
                  'border-green-500':
                    option.id.toString() ==
                    questionDetails[answer.question].question.answer,
                  'border-red-500':
                    option.id.toString() == answer.answer &&
                    option.id.toString() !=
                      questionDetails[answer.question].question.answer
                }"
              >
                <input
                  :id="`option-${option.id}`"
                  v-model="answer.answer"
                  class="mr-2 box-content size-1.5 appearance-none rounded-lg border-[4px] border-transparent ring-1 ring-primary-500 checked:border-primary-500"
                  :class="{
                    'ring-red-500 checked:border-red-500':
                      option.id.toString() == answer.answer &&
                      option.id.toString() !=
                        questionDetails[answer.question].question.answer
                  }"
                  type="radio"
                  :value="option.id"
                  disabled
                />
                {{ option.text }}
              </label>
            </div>
          </div>
          <div
            v-else-if="
              questionDetails[answer.question].question.type === 'text'
            "
          >
            <!-- 显示正确答案 -->
            <div
              v-if="
                answer.answer !=
                questionDetails[answer.question].question.answer
              "
              class="mb-2 text-green-500"
            >
              正确答案：{{ questionDetails[answer.question].question.answer }}
            </div>
            <textarea
              v-model="answer.answer"
              rows="4"
              class="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-primary-500 dark:border-dark-block-400 dark:bg-dark-block-600 dark:text-gray-100 dark:focus:ring-primary-700"
              :class="{
                'border-green-500 text-green-500':
                  answer.answer ==
                  questionDetails[answer.question].question.answer,
                'border-red-500 text-red-500':
                  answer.answer !=
                  questionDetails[answer.question].question.answer
              }"
              disabled
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <PHLoadingIcon
      v-else
      class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  </div>
</template>

<script setup lang="ts">
import PHLoadingIcon from '../components/PHLoadingIcon.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Exam, PaperQuestion } from '../types/paper'
import { useUserStore } from '../stores/user'
import { usePaperStore } from '../stores/paper'

const route = useRoute()
const userStore = useUserStore()
const paperStore = usePaperStore()

const examId = Number(route.params.id)
const exam = ref<Exam | null>(null)
const questionDetails = ref<{ [key: number]: PaperQuestion }>({})

const totalScore = ref(0)
const totalMcqScore = ref(0)

onMounted(async () => {
  exam.value = await paperStore.getExam(examId, userStore.token!)
  if (exam.value) {
    exam.value.paper.questions.forEach((question) => {
      totalScore.value += question.score
      totalMcqScore.value +=
        question.question.type === 'mcq' ? question.score : 0
      questionDetails.value[question.question.id] = question
    })
  }
})
</script>
