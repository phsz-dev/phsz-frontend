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
        class="mx-auto overflow-hidden rounded-xl bg-white shadow-md md:max-w-5xl"
        v-if="store.assayInfo"
      >
        <div class="md:flex">
          <div class="p-8">
            <a
              href="#"
              class="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
              >{{ store.assayInfo?.name }}</a
            >
  
            <div class="mt-4" >
              <div class="py-1">
                <span class="font-bold">类型：</span
                >{{ store.assayInfo?.type }}
              </div>
              <div class="py-1 flex" >
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
      <div class="w-full h-full" v-else>
        <PHLoadingIcon />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAssayStore } from '../stores/assay'
  import { onMounted } from 'vue'
import PHLoadingIcon from './PHLoadingIcon.vue';
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
  