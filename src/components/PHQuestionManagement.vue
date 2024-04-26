<template>
  <PHManagement
    v-model="questionModal"
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
    @revise-item="reviseItem"
  >
  <PHQuestionForm ref="questionForm" @submit="refresh" />
  </PHManagement>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHManagement from './PHManagement.vue'
import PHQuestionForm from './PHQuestionForm.vue'
import { createModalConfig } from '../utils/ModalConfig'
import router from '../router';

const title = '题目管理'
const buttonName = '添加题目'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '类型', value: 'type', transform: (type : 'mcq' | 'text') => type === 'mcq' ? '选择题' : '文本题' },
  { text: '题面', value: 'text' }
]
const url = '/api/test/question'

const questionForm = ref<InstanceType<typeof PHQuestionForm>>()

const questionModal = createModalConfig(
  buttonName,
  async () => {
    await questionForm.value?.submit()
  },
)

const addItem = () => {
  questionModal.value.show = true
}

const reviseItem = async (id: number) => {
  questionModal.value.show = true
  // 等到questionForm组件显示后再调用revise方法
  while (!questionForm.value) {
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
  await questionForm.value?.revise(id)
}

const refresh = () => {
  // 刷新页面
  router.go(0)
}
</script>