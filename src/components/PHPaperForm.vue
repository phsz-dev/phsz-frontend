<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <PHFormInput
          v-model="paper.name"
          name="paperName"
          label="试卷名称"
          type="text"
          placeholder="请输入试卷名称"
          autocomplete="off"
        />

        <PHFormInput
          v-model="paper.content"
          name="paperContent"
          label="试卷介绍"
          type="text"
          placeholder="请输入试卷介绍"
          autocomplete="off"
        />

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">试卷内容</legend>
            <div v-for="(paperQuestion, index) in paper.questions" :key="index" class="mt-2">
              <label for="paperQuestion" class="block text-sm font-medium leading-6 text-gray-900">
                {{ paperQuestion.sequence }}. 
              </label>
              <select
                class="rounded-base flex-1 rounded-md border border-gray-300 dark:border-white px-4 text-lg dark:bg-dark-block-400 dark:text-white"
                v-model="paperQuestion.question.id"
              >
                <option
                  v-for="question in questionList"
                  :key="question.id"
                  :value="question.id"
                >
                  {{ question.text.slice(0, 10) }}
                </option>
              </select>
              <PHFormInput
                v-model="paperQuestion.score"
                name="paperQuestionScore"
                label="分数"
                type="number"
                placeholder="请输入分数"
                autocomplete="off"
                class="mt-0"
              />
              <button
                class="rounded-md border border-red-500 mt-3 px-2 py-2 text-red-500  text-xs"
                @click.prevent="removeQuestion(index)"
              >
                删除题目
              </button>
            </div>
            <button
              class="rounded-md border border-primary-600 mt-3 px-2 py-2 text-primary-600  text-xs "
              @click.prevent="addQuestion"
            >
             增加题目
            </button>
          </fieldset>
        </div>

        <PHFormInput
          v-model="paper.durationSeconds"
          name="paperDurationSeconds"
          label="考试时长（秒）"
          type="number"
          placeholder="请输入考试时长"
          autocomplete="off"
        />

        <!-- <PHFormInput
          v-model="paper.totalScore"
          name="paperTotalScore"
          label="总分"
          type="number"
          placeholder="请输入总分"
          autocomplete="off"
          :disabled="true"
        /> -->

        <PHFormInput
          v-model="paper.deadline"
          name="paperDeadline"
          label="截止日期"
          type="date"
          placeholder="请输入截止日期"
          autocomplete="off"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PHFormInput from './PHFormInput.vue'
import { Paper, Question } from '../types/paper'
import ApiService from '../http'
import { usePaperStore } from '../stores/paper'

const store = usePaperStore()

const currentQuestionId = ref<number | undefined>(undefined)
const questionList = ref<Question[]>([])

onMounted(async () => {
  questionList.value = await store.getAllQuestions()
  console.log(questionList)
})

const apiService = new ApiService('')

//   interface Paper {
//   id: number
//   name: string
//   content: string
//   durationSeconds: number
//   totalScore: number
//   deadline: string
//   questions: PaperQuestion[]
// }
const paper = ref<Paper>({
  id: undefined,
  name: '',
  content: '',
  durationSeconds: 0,
  totalScore: 0,
  deadline: '',
  questions: []
})

const addQuestion = () => {
  console.log(currentQuestionId.value)
  paper.value.questions.push({ sequence: paper.value.questions.length + 1, score: 0,
    question: { id: 0 }
   })
}

const removeQuestion = (index: number) => {
  paper.value.questions.splice(index, 1)
}

const submit = async () => {
  paper.value.totalScore = 0
  for (const q of paper.value.questions) {
    paper.value.totalScore += q.score
  }
  await apiService.post('/api/test/paper', paper.value)
  emit('submit')
}

const revise = async (id: number) => {
  const data = await apiService.get(`/api/test/paper/${id}`)
  data.deadline = data.deadline.split('T')[0]
  paper.value = data
}

const emit = defineEmits(['submit'])

defineExpose({
  submit,
  revise
})
</script>
