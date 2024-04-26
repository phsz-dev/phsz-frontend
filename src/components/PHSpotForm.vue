<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <PHFormInput
          v-model="spot.x"
          name="spotX"
          label="X坐标"
          type="number"
          placeholder="请输入X坐标"
          autocomplete="off"
        />

        <PHFormInput
          v-model="spot.y"
          name="spotY"
          label="Y坐标"
          type="number"
          placeholder="请输入Y坐标"
          autocomplete="off"
        />

        <PHFormInput
          v-model="spot.z"
          name="spotZ"
          label="Z坐标"
          type="number"
          placeholder="请输入Z坐标"
          autocomplete="off"
        />

        <PHFormInput
          v-model="spot.sceneId"
          name="spotSceneId"
          label="场景ID"
          type="number"
          placeholder="请输入场景ID"
          autocomplete="off"
        />

        <PHFormInput
          v-model="spot.name"
          name="spotName"
          label="名称"
          type="text"
          placeholder="请输入名称"
          autocomplete="off"
        />

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
          <div class="sm:col-span-4">
            <label
              for="spotDescription"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              描述
            </label>
            <div class="mt-2">
              <PHQuill v-model="spot.description" class="" />
            </div>
          </div>
        </div>

        <!-- <PHFormInput
          v-model="spot.videoUrl"
          name="spotVideoUrl"
          label="视频地址"
          type="text"
          placeholder="请输入视频地址"
          autocomplete="off"
        /> -->
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-full">
            <label
              for="photo"
              class="block text-sm font-medium leading-6 text-gray-900"
              >视频
            </label>
            <div class="mt-2 flex items-center gap-x-3">
              <button
                type="button"
                class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                @click="chooseFile"
              >
                更换视频
              </button>
              <input
                ref="fileInput"
                type="file"
                style="display: none"
                @change="uploadFile"
              />
            </div>
            <video
              v-if="spot.videoUrl"
              class="mt-2"
              controls
              :src="spot.videoUrl"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHFormInput from './PHFormInput.vue'
import PHQuill from './PHQuill.vue'
import Spot from '../types/Spot'
import ApiService from '../http'
import { useFileUploadStore } from '../stores/fileUpload'

const apiService = new ApiService('')
const fileUploadStore = useFileUploadStore()

const spot = ref<Spot>({
  x: 0,
  y: 0,
  z: 0,
  sceneId: 0,
  name: '',
  description: '<p></p>',
  videoUrl: ''
})

const fileInput = ref<HTMLInputElement | null>(null)

const chooseFile = () => {
  fileInput.value?.click()
}

const uploadFile = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    fileUploadStore.uploadVideo(file).then((url) => {
      spot.value.videoUrl = url
    })
  }
}

const submit = async () => {
  await apiService.post('/api/3d/spot', spot.value)
  emit('submit')
}

const revise = async (id: number) => {
  const data = await apiService.get(`/api/3d/spot/${id}`)
  spot.value = data
}

const emit = defineEmits(['submit'])

defineExpose({
  submit,
  revise
})
</script>
