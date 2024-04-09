<template>
  <div>
    <!-- export default interface vaccine {
        id: number
        name: string
        manufacturer: string
        expiryDate: String
        } -->
    <!-- 单个medicine展示页面 -->
    <div
      v-if="store.vaccineInfo"
      class="mx-auto overflow-hidden rounded-xl bg-white shadow-md md:max-w-5xl"
    >
      <div class="md:flex">
        <div class="p-8">
          <a
            href="#"
            class="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
            >{{ store.vaccineInfo?.name }}</a
          >

          <div class="mt-4">
            <div class="py-1">
              <span class="font-bold">加工厂：</span
              >{{ store.vaccineInfo?.manufacturer }}
            </div>
            <div class="py-1">
              <span class="font-bold">有效期：</span
              >{{
                new Date(
                  store.vaccineInfo.expiryDate.toString()
                ).toLocaleString()
              }}
            </div>
            <div class="py-1">
              <span class="font-bold">价格：</span>￥{{
                store.vaccineInfo?.price
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
import { useVaccineStore } from '../stores/vaccine'
import { onMounted } from 'vue'
import PHLoadingIcon from './PHLoadingIcon.vue'
const store = useVaccineStore()

const props = defineProps<{
  vaccineId: number
}>()

onMounted(() => {
  try {
    store.getVaccineById(props.vaccineId)
  } catch (error) {
    console.log(error)
  }
})
</script>
