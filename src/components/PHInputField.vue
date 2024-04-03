<template>
  <div>
    <input
      :id="id"
      v-model="modelValue"
      :type="type"
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
type InputType = 'text' | 'email' | 'password' | 'number'

withDefaults(
  defineProps<{
    id?: string
    type?: InputType
    placeholder?: string
    errorCondition?: boolean
    errorMessage?: string
  }>(),
  {
    id: undefined,
    type: 'text',
    placeholder: '',
    errorCondition: false,
    errorMessage: ''
  }
)

const modelValue = defineModel<string>()
</script>
