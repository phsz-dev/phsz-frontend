<template>
  <div class="mt-4 flex items-center justify-center">
    <button
      class="rounded border p-2 px-4 text-sm hover:border-primary-500 hover:ring-2 dark:border-gray-500 dark:text-gray-200"
      @click="prevPage"
    >
      上一页
    </button>
    <span class="mx-6 text-sm dark:text-gray-200">{{
      currentPage + 1 + '/' + (totalPages ?? 0)
    }}</span>
    <button
      class="rounded border p-2 px-4 text-sm hover:border-primary-500 hover:ring-2 dark:border-gray-500 dark:text-gray-200"
      @click="nextPage"
    >
      下一页
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMessageStore } from '../stores/message';
import Message from '../types/message';
const store = useMessageStore()
const props = defineProps<{
  totalPages?: number
}>()

const currentPage = defineModel<number>({ required: true })

const emit = defineEmits<{
  prevPage: []
  nextPage: []
}>()

const prevPage = () => {
  currentPage.value > 0 && currentPage.value--
  if(currentPage.value == 0) {
    store.addMessage(Message.partialMessage('已经是第一页了', 'warn','top'))
  }
  emit('prevPage')
}

const nextPage = () => {
  currentPage.value < (props.totalPages ?? 0) - 1 && currentPage.value++
  if(currentPage.value == (props.totalPages ?? 0) - 1) {
    store.addMessage(Message.partialMessage('已经是最后一页了', 'warn','top'))
  }
  emit('nextPage')
}


</script>
