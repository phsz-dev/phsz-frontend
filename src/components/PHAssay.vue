<template>
  <div>
    <!-- export default interface assay {
            id: number
            name: string
            description: string
            type: string
            date: string
            price: number
            }
            -->
    <!-- 单个assay展示页面 -->
    <div
      v-if="store.assayInfo"
      class="mx-auto overflow-hidden rounded-xl bg-white shadow-md md:max-w-5xl dark:bg-dark-block-600 dark:text-gray-200"
    >
      <div class="md:flex">
        <div class="p-8">
          <a
            href="#"
            class="mt-1 block text-lg font-medium leading-tight text-black hover:underline dark:text-gray-200"
            >{{ store.assayInfo?.name }}</a
          >

          <div class="mt-4">
            <div class="py-1">
              <span class="font-bold">类型：</span>{{ store.assayInfo?.type }}
            </div>
            <div class="flex py-1">
              <span class="font-bold">介绍：</span>
              <span v-html="store.assayInfo?.description"></span>
            </div>
            <div class="py-1">
              <span class="font-bold">价格：</span>￥{{
                store.assayInfo?.price
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
import { useAssayStore } from '../stores/assay'
import { onMounted } from 'vue'
import PHLoadingIcon from './PHLoadingIcon.vue'
const store = useAssayStore()

const props = defineProps<{
  assayId: number
}>()

onMounted(() => {
  try {
    store.getAssayById(props.assayId)
  } catch (error) {
    console.log(error)
  }
})
</script>
