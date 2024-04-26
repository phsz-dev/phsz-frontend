<template>
  <PHManagement
    v-model="spotModal"
    :title="title"
    :button-name="buttonName"
    :table-headers="tableHeaders"
    :url="url"
    @add-item="addItem"
    @revise-item="reviseItem"
  >
    <PHSpotForm ref="spotForm" @submit="refresh" />
  </PHManagement>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../router'
import PHSpotForm from './PHSpotForm.vue'
import PHManagement from './PHManagement.vue'
import { createModalConfig } from '../utils/ModalConfig'

const title = '定点数据'
const buttonName = '添加定点'
// export default interface Spot {
//   id: number
//   x: number
//   y: number
//   z: number
//   sceneId: number
//   name: string
//   description: string
//   videoUrl: string
// }
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: 'X', value: 'x' },
  { text: 'Y', value: 'y' },
  { text: 'Z', value: 'z' },
  { text: '场景ID', value: 'sceneId' },
  { text: '名称', value: 'name' },
  { text: '描述', value: 'description', transform: (description: string) => description.length > 100 ? description.slice(62, 80) + '...' : description }
]
const url = '/api/3d/spot'

const spotForm = ref<InstanceType<typeof PHSpotForm>>()

const spotModal = createModalConfig(buttonName, async () => {
  await spotForm.value?.submit()
})

const addItem = () => {
  spotModal.value.show = true
}

const reviseItem = async (id: number) => {
  spotModal.value.show = true
  // 等到spotForm组件显示后再调用revise方法
  while (!spotForm.value) {
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
  await spotForm.value?.revise(id)
}

const refresh = () => {
  // 刷新页面
  router.go(0)
}
</script>
