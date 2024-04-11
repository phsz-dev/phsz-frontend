<template>
    <div class="relative mx-auto h-full w-full overflow-y-scroll rounded-xl bg-white px-8 py-2 shadow-md md:max-w-5xl dark:bg-dark-block-500" v-if="store.detailedCase">
      <div class="flex w-full justify-between py-4">
        <div class="dark:text-gray-200 text-lg py-2 w-30">ID</div>
        <div class="dark:text-gray-200 text-lg py-2">{{ store.detailedCase?.id }}</div>
      </div>
      <div class="flex w-full justify-between py-4">
        <div class="dark:text-gray-200 text-lg py-2 w-30">病例名称</div>
        <input type="text" class="dark:text-gray-200 text-lg py-2 flex-1 rounded-base ml-20 rounded-md px-4 dark:bg-dark-block-400 border border-gray-300" v-model="store.detailedCase.name" />
      </div>
      <div class="flex w-full justify-between py-4">
        <div class="dark:text-gray-200 text-lg py-2 w-30">提交时间</div>
        <div class="dark:text-gray-200 text-lg py-2">
          {{
            store.detailedCase.submitTime
              ? new Date(store.detailedCase?.submitTime).toLocaleString()
              : new Date().toLocaleString()
          }}
        </div>
      </div>
      <div class="flex w-full justify-between py-4">
        <div class="dark:text-gray-200 text-lg py-2 w-30">病例简介</div>
        <textarea class="dark:text-gray-200 text-lg py-2 flex-1 rounded-base ml-20 rounded-md px-4 dark:bg-dark-block-400 border border-gray-300" v-model="store.detailedCase.brief"></textarea>
      </div>
      <div class="flex w-full justify-between py-4">
        <div class="dark:text-gray-200 text-lg py-2 w-30">病例描述</div>
        <div class="flex-1 ml-20">
            <PHQuill v-model="store.detailedCase.description" />
        </div>
      </div>
    </div>
    <div v-else class="h-full w-full">
      <PHLoadingIcon />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCaseStore } from '../stores/case'
import PHLoadingIcon from './PHLoadingIcon.vue'
import PHQuill from './PHQuill.vue';
const store = useCaseStore()
const props = defineProps<{
  case_id: number
}>()

onMounted(async () => {
  try {
    console.log(store)
    await store.getDetailedCase(props.case_id)
  } catch (e) {
    console.log(e)
  }
})
</script>