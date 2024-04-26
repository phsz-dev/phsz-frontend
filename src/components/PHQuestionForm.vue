<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <PHFormInput
            v-model="question.text"
            name="questionText"
            label="题面"
            type="textarea"
            placeholder="请输入题面"
            autocomplete="off"
        />

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">类型</legend>
            <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">选择题或文本题</p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input id="mcq" v-model="question.type" value="mcq" name="questionType" type="radio" class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600">
                <label for="mcq" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">选择题</label>
              </div>
        
              <div class="flex items-center gap-x-3">
                <input id="text" v-model="question.type" value="text" name="questionType" type="radio" class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600 checked">
                <label for="text" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">文本题</label>
              </div>
            </div>
          </fieldset>
        </div>
        
        <div v-if="question.type === 'mcq'" class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">选项</legend>
            <div v-for="(option, index) in question.options" :key="index" class="mt-2">
                <PHFormInput
                  v-model="option.text"
                  name="questionOption"
                  :label="'选项' + (index + 1)"
                  type="text"
                  placeholder="请输入选项"
                  autocomplete="off"
                />
                <button
                  class="rounded-md border border-red-500 mt-3 px-2 py-2 text-red-500  text-xs"
                  @click.prevent="removeOption(index)"
                >
                  删除选项
                </button>
            </div>
            <button
              class="rounded-md border border-primary-600 mt-3 px-2 py-2 text-primary-600  text-xs"
              @click.prevent="addOption"
            >
             增加选项
            </button>
          </fieldset>
        </div>

        <PHFormInput
            v-model="question.answer"
            name="questionAnswer"
            label="答案"
            type="text"
            placeholder="请输入答案"
            autocomplete="off"
        />

      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHFormInput from './PHFormInput.vue'
import { Question } from '../types/paper';
import { usePaperStore } from '../stores/paper';

const store = usePaperStore()

const question = ref<Question>({
  id: undefined,
  text: '',
  type: 'text',
  options: [],
  answer: ''
})

const submit = async () => {
  // 根据index设置选项id
  question.value.options = question.value.options?.map((option, index) => {
    return {
      id: index + 1,
      text: option.text
    }
  })
  console.log(question.value)
  store.saveQuestion(question.value)
  emit('submit')
}

const revise = async (id: number) => {
  question.value = await store.getQuestion(id)
}

const addOption = () => {
  question.value.options?.push({id: undefined, text: ''})
}

const removeOption = (index: number) => {
  question.value.options?.splice(index, 1)
}

const emit = defineEmits(['submit'])

defineExpose({
  submit,
  revise
})
</script>

<style scoped>
</style>