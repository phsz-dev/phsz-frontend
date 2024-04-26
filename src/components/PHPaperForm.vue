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
          label="试卷内容"
          type="text"
          placeholder="请输入试卷内容"
          autocomplete="off"
        />

        <PHFormInput
          v-model="paper.durationSeconds"
          name="paperDurationSeconds"
          label="考试时长"
          type="number"
          placeholder="请输入考试时长"
          autocomplete="off"
        />

        <PHFormInput
          v-model="paper.totalScore"
          name="paperTotalScore"
          label="总分"
          type="number"
          placeholder="请输入总分"
          autocomplete="off"
        />

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
import { Paper } from '../types/paper'
import ApiService from '../http'
import { usePaperStore } from '../stores/paper'

const store = usePaperStore()

onMounted(async () => {
  const res = store.getAllQuestions()
  console.log(res)
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

const submit = async () => {
  await apiService.post('/api/test/paper', paper.value)
  emit('submit')
}

const revise = async (id: number) => {
  const data = await apiService.get(`/api/test/paper/${id}`)
  paper.value = data
}

const emit = defineEmits(['submit'])

defineExpose({
  submit,
  revise
})
</script>
