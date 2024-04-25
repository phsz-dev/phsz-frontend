<template>
  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div class="sm:col-span-4">
      <label :for="name" class="block text-sm font-medium leading-6 text-gray-900">
        {{ label }}
      </label>
      <div class="mt-2">
        <input 
          v-if = "type !== 'textarea'"
          :id="name" 
          v-model="modelValue" 
          :type="type" 
          :name="name" 
          :autocomplete="autocomplete" 
          class="block w-full rounded-md border-0 bg-transparent py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" :placeholder="placeholder" 
          :min = "type === 'number' ? 0 : undefined"
        />
        <textarea 
          v-else 
          :id="name" 
          v-model="modelValue" 
          :name="name" 
          :autocomplete="autocomplete" 
          class="block w-full rounded-md border-0 bg-transparent py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 h-32" :placeholder="placeholder">
        </textarea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url' | 'date' | 'textarea'

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
const modelValue = defineModel<string | number>()
</script>

<style scoped>
input:focus, textarea:focus {
  outline: none;  /* 完全移除焦点边框 */
}
</style>