<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <PHFormInput 
          v-model="vaccine.name"
          name="vaccineName"
          label="疫苗名称" 
          type="text" 
          placeholder="请输入疫苗名称"
          autocomplete="off"
        />

        <PHFormInput
            v-model="vaccine.manufacturer"
            name="vaccineManufacturer"
            label="生产商" 
            type="text" 
            placeholder="请输入生产商"
            autocomplete="off"
        />

        <PHFormInput
            v-model="vaccine.price"
            name="vaccinePrice"
            label="价格" 
            type="number" 
            placeholder="请输入价格"
            autocomplete="off"
        />

        <PHFormInput
            v-model="vaccine.expiryDate"
            name="vaccineExpiryDate"
            label="过期日期" 
            type="date" 
            placeholder="请输入过期日期"
            autocomplete="off"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHFormInput from './PHFormInput.vue'
import Vaccine from '../types/vaccine'
import { useVaccineStore } from '../stores/vaccine'

const store = useVaccineStore()

const vaccine = ref<Vaccine>({
  id: undefined,
  name: '',
  manufacturer: '',
  price: 0,
  expiryDate: ''
})

const submit = async () => {
  await store.addVaccine(vaccine.value)
  emit('submit')
}

const revise = async (id: number) => {
  const data = await store.getVaccineById(id)
  data.expiryDate = data.expiryDate.split('T')[0]
  vaccine.value = data
}

const emit = defineEmits(['submit'])

defineExpose({
  submit,
  revise
})
</script>

<style scoped>
</style>