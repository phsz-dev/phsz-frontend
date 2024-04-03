<template>
  <div>
    <input
      id="username"
      v-model="modelValue"
      type="text"
      class="h-30 w-full rounded-md border bg-transparent px-4 py-4 text-black outline-none placeholder:text-gray-400 focus:border-2 focus:border-primary-600 focus:ring-0 dark:text-gray-200 placeholder:dark:text-gray-200"
      :class="errorCondition ? 'border-red-500' : 'border-zinc-500'"
      :placeholder="placeholder"
    />
    <div v-if="errorCondition" class="ml-2 mt-1 text-sm text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string
  errorCondition: boolean
  errorMessage: string
}>()

const modelValue = defineModel<string>()
</script>
