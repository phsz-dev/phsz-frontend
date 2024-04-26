<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <PHFormInput
          v-model="document.page_content"
          name="pageContent"
          label="文档内容"
          type="textarea"
          placeholder="请输入文档内容"
          autocomplete="off"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHFormInput from './PHFormInput.vue'
import { Document } from '../types'
import ApiService from '../http'

const apiService = new ApiService('')

const document = ref<Document>({
  page_content: ''
})

const submit = async () => {
  await apiService.post('/api/docs', document.value)
  emit('submit')
}

const revise = async (id: number) => {
  const data = await apiService.get(`/api/docs/${id}`)
  document.value = data
}

const emit = defineEmits(['submit'])

defineExpose({
  submit,
  revise
})
</script>