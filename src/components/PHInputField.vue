<template>
  <div>
    <input
      :id="id"
      v-model="modelValue"
      :type="type"
      class="box-border h-14 w-full rounded-md border bg-transparent pl-4 text-black outline-none placeholder:text-gray-400 focus:border-2 focus:pl-[15px] dark:text-gray-200"
      :class="
        errorCondition
          ? 'border-red-500'
          : 'border-zinc-500 focus:border-primary-600'
      "
      :placeholder="placeholder"
      @input="$emit('input', $event)"
    />
    <div v-if="errorCondition && errorMessage" class="ml-2 mt-1 text-sm text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
type InputType = 'text' | 'email' | 'password' | 'number' | 'search'

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

defineEmits(['input'])
</script>
