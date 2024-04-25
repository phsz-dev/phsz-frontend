<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <PHFormInput
            v-model="medicine.name"
            name="medicineName"
            label="药品名称"
            type="text"
            placeholder="请输入药品名称"
            autocomplete="off"
        />

        <PHFormInput
            v-model="medicine.type"
            name="medicineType"
            label="类型"
            type="text"
            placeholder="请输入类型"
            autocomplete="off"
        />

        <PHFormInput
            v-model="medicine.usage"
            name="medicineUsage"
            label="用法"
            type="textarea"
            placeholder="请输入用法"
            autocomplete="off"
        />

        <PHFormInput
            v-model="medicine.price"
            name="medicinePrice"
            label="价格"
            type="number"
            placeholder="请输入价格"
            autocomplete="off"
        />

        <PHFormInput
            v-model="medicine.batchNumber"
            name="medicineBatchNumber"
            label="批号"
            type="text"
            placeholder="请输入批号"
            autocomplete="off"
        />

        <PHFormInput
            v-model="medicine.validity"
            name="medicineValidity"
            label="有效期"
            type="date"
            placeholder="请输入有效期"
            autocomplete="off"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PHFormInput from './PHFormInput.vue'
import Medicine from '../types/medicine';
import { useMedicineStore } from '../stores/medicine';

const store = useMedicineStore()

const medicine = ref<Medicine>({
  id: undefined,
  name: '',
  type: '',
  usage: '',
  price: 0,
  batchNumber: '',
  validity: ''
})

const submit = async () => {
  await store.addMedicine(medicine.value)
  console.log('submit')
}

const revise = async (id: number) => {
  const data = await store.getMedicineById(id)
  // yyyy-mm-dd
  data.validity = data.validity.split('T')[0]
  medicine.value = data
}


defineExpose({
  submit,
  revise
})
</script>

<style scoped></style>