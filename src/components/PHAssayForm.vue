<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <PHFormInput 
          v-model="assay.name"
          name="assayName"
          label="检查名称" 
          type="text" 
          placeholder="请输入检查名称"
          autocomplete="off"
        />

        <PHFormInput 
          v-model="assay.type"
          name="assayType"
          label="类型" 
          type="text" 
          placeholder="请输入类型"
          autocomplete="off"
        />

        <PHFormInput 
          v-model="assay.price"
          name="assayPrice"
          label="价格" 
          type="number" 
          placeholder="请输入价格"
          autocomplete="off"
        />
        
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ">
          <div class="sm:col-span-4">
            <label for="assayDescription" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
              描述
            </label>
            <div class="mt-2">
              <PHQuill v-model="assay.description" class="dark:text-white"/>
            </div>
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
import Assay from '../types/assay'
import { useAssayStore } from '../stores/assay'

const store = useAssayStore()

const assay = ref<Assay>({
  id: undefined,
  name: '',
  type: '',
  price: 0,
  date: undefined,
  description: ' ',
})

const submit = async () => {
  await store.addAssay(assay.value)
  emit('submit')
}

const revise = async (id: number) => {
  assay.value = await store.getAssayById(id)
}

const emit = defineEmits(['submit'])

defineExpose({
  submit,
  revise
})
</script>

<style scoped></style>