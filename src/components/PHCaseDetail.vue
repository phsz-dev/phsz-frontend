<template>
  <div
    class="h-full w-full overflow-hidden overflow-y-scroll rounded-md bg-white px-4 py-1 dark:bg-dark-block-500"
  >
    <div class="text-xl font-bold dark:text-gray-200">
      {{ store.detailedCase?.name }}
    </div>
    <div class="mt-1 text-gray-400 dark:text-gray-300">
      {{
        store.detailedCase?.submitTime
          ? new Date(store.detailedCase?.submitTime).toLocaleString()
          : new Date().toLocaleString()
      }}
    </div>
    <div class="mb-2 mt-1 break-all dark:text-gray-200">
      {{ store.detailedCase?.brief }}
    </div>
    <div class="h-[0.105rem] bg-gray-200"></div>
    <div>
      <div>
        <PHChoiceList :choices="choices" :routes="routes" />
        <div class="h-[0.1rem] bg-gray-200"></div>
      </div>
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PHChoiceList from './PHChoiceList.vue'
import { useCaseStore } from '../stores/case'
const store = useCaseStore()

const props = defineProps<{
  case_id: number
}>()

onMounted(async () => {
  try {
    await store.getDetailedCase(props.case_id)
  } catch (e) {
    console.log(e)
  }
})

const choices = ref([
  '基本介绍',
  '处方药品',
  '处方疫苗',
  '检查项目',
  '收费详情'
])
const routes = ref([
  {
    path: `/case-detail/${props.case_id}/intro`
  },
  {
    path: `/case-detail/${props.case_id}/medicine`
  },
  {
    path: `/case-detail/${props.case_id}/vaccine`
  },
  {
    path: `/case-detail/${props.case_id}/assay`
  },
  {
    path: `/case-detail/${props.case_id}/charge`
  }
])
</script>
