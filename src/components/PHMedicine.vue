<template>
  <div>
    <!-- export default interface medicine {
        id: number
        name: string
        type: string
        usage: string
        validity: string
        batchNumber: string
        medicineDosage: string
        price: number
        } -->
    <!-- 单个medicine展示页面 -->
    <div
      v-if="store.medicineInfo"
      class="mx-auto overflow-hidden rounded-xl bg-white shadow-md md:max-w-5xl dark:bg-dark-block-600 dark:text-gray-200"
    >
      <div class="md:flex">
        <div class="p-8">
          <a
            href="#"
            class="mt-1 block text-lg font-medium leading-tight text-black hover:underline dark:bg-dark-block-600 dark:text-gray-200"
            >{{ store.medicineInfo?.name }}</a
          >

          <div class="mt-4">
            <div class="py-1">
              <span class="font-bold">类型：</span
              >{{ store.medicineInfo?.type }}
            </div>
            <div class="py-1">
              <span class="font-bold">批号：</span
              >{{ store.medicineInfo?.batchNumber }}
            </div>
            <div class="py-1">
              <span class="font-bold">有效期：</span
              >{{ new Date(store.medicineInfo.validity).toLocaleString() }}
            </div>
            <div class="py-1">
              <span class="font-bold">用途：</span
              >{{ store.medicineInfo?.usage }}
            </div>
            <div class="py-1">
              <span class="font-bold">价格：</span>￥{{
                store.medicineInfo?.price
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="h-full w-full">
      <PHLoadingIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMedicineStore } from '../stores/medicine'
import { onMounted } from 'vue'
import PHLoadingIcon from './PHLoadingIcon.vue'
const store = useMedicineStore()

const props = defineProps<{
  medicineId: number
}>()

onMounted(() => {
  try {
    store.getMedicineById(props.medicineId)
  } catch (error) {
    console.log(error)
  }
})
</script>
