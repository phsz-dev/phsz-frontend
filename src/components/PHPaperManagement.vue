<template>
  <PHManagement
    v-model="paperModal"
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
    @revise-item="reviseItem"
  >
  <PHPaperForm ref="paperForm" @submit="refresh" />
  </PHManagement>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../router'
import PHManagement from './PHManagement.vue'
import PHPaperForm from './PHPaperForm.vue'
import { createModalConfig } from '../utils/ModalConfig';

const title = '试卷管理'
const buttonName = '新建试卷'

//   interface Paper {
//   id: number
//   name: string
//   content: string
//   durationSeconds: number
//   totalScore: number
//   questions: PaperQuestion[]
// }
const tableHeaders = [
  { text: 'ID', value: 'id' },
    { text: '试卷名称', value: 'name' },
    { text: '时长(秒)', value: 'durationSeconds' },
    { text: '总分', value: 'totalScore' },
    { text: '截止日期', value: 'deadline', type: 'time' }
]

const url = '/api/test/paper'

const paperForm = ref<InstanceType<typeof PHPaperForm>>()

const paperModal = createModalConfig(buttonName, async () => {
  await paperForm.value?.submit()
})

const addItem = () => {
    paperModal.value.show = true
}

const reviseItem = async (id: number) => {
    paperModal.value.show = true
  // 等到documentForm组件显示后再调用revise方法
  while (!paperForm.value) {
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
  await paperForm.value?.revise(id)
}

const refresh = () => {
  // 刷新页面
  router.go(0)
}
</script>

<style scoped></style>
