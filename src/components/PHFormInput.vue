<template>
  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div class="sm:col-span-4">
      <label :for="name" class="block text-sm font-medium leading-6 text-gray-900">
        {{ label }}
      </label>
      <div class="mt-2">
        <input 
          :id="name" 
          v-model="modelValue" 
          :type="type" 
          :name="name" 
          :autocomplete="autocomplete" 
          class="block w-full rounded-md border-0 bg-transparent py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" :placeholder="placeholder" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'

withDefaults(
  defineProps<{
    name: string
    label: string
    type?: InputType
    placeholder?: string
    autocomplete?: string
  }>(),
  {
    type: 'text',
    placeholder: '',
    autocomplete: 'off'
  }
)
const modelValue = defineModel<string>()
</script>

<style scoped>
input:focus {
  outline: none;  /* 完全移除焦点边框 */
}
</style>