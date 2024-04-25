<template>
  <div class="px-3 py-3 bg-white dark:!bg-dark-block-500">
    <input
      v-model="searchQuery"
      class="box-border h-10 w-full rounded-md border bg-transparent pl-4 text-black outline-none placeholder:text-gray-400 focus:border-2 focus:pl-[15px] dark:text-gray-200 border-zinc-500 focus:border-primary-600"
      type="text"
      :placeholder="placeholder"
      @keydown.enter="search"
    />
  </div>
</template>

<script setup lang="ts">

const searchQuery = defineModel<string>()
const emit = defineEmits(['search'])
const search = () => {
  // 向外发送信号
  emit('search')
}

defineProps<{
  placeholder?: string
}>()
</script>

<style scoped></style>