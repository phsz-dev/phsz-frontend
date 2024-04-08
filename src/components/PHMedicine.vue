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
        <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
        <div class="md:flex">
            <div class="p-8">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">阿菲索干扰素注射液</a>
                
                <div class="mt-4">
                    <div class="py-1"><span class="font-bold">类型：</span>注射液</div>
                    <div class="py-1"><span class="font-bold">批号：</span>ABC123</div>
                    <div class="py-1"><span class="font-bold">有效期：</span>2024-04-29 16:00</div>
                    <div class="py-1"><span class="font-bold">用途：</span>外源性抗体补给</div>
                    <div class="py-1"><span class="font-bold">价格：</span>￥60</div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { useMedicineStore } from '../stores/medicine';
import { onMounted } from 'vue';
const store = useMedicineStore();

const props = defineProps<{
  medicineId: number
}>()

onMounted(() => {
  try {
    store.getMedicineById(props.medicineId);
  } catch (error) {
    console.log(error)
  }
})

</script>