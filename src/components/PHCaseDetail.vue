<template>
  <div
    class="relative h-full w-full overflow-hidden overflow-y-scroll rounded-md bg-white px-4 py-2 dark:bg-dark-block-500"
    v-if="store.detailedCase"
  >
    <div class="text-2xl font-bold dark:text-gray-200">
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
        <PHChoiceList
          :choices="choices"
          v-model="currentIndex"
          @change-index="changeIndex"
        />
        <div class="h-[0.1rem] bg-gray-200"></div>
      </div>
      <div class="p-2">
        <RouterView />
      </div>
    </div>
  </div>
  <div v-else class="w-full h-full">
    <PHLoadingIcon />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PHChoiceList from './PHChoiceList.vue'
import PHLoadingIcon from './PHLoadingIcon.vue'
import { useCaseStore } from '../stores/case'
import router from '../router'
import { useRoute } from 'vue-router'
const store = useCaseStore()
const route = useRoute()

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

onUnmounted(() => {
  store.detailedCase = undefined
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

// 路径比对
const currentIndex = ref(
  routes.value.findIndex((item) => item.path === route.path)
)

const changeIndex = () => {
  router.push(routes.value[currentIndex.value])
}
</script>
