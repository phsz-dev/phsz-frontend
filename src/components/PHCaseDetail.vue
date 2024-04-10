<template>
  <div
    v-if="store.detailedCase"
    class="relative mx-auto h-full w-full overflow-y-scroll rounded-xl bg-white px-4 py-2 shadow-md md:max-w-5xl dark:bg-dark-block-500"
  >
    <div class="mt-2 text-2xl font-bold dark:text-gray-200">
      {{ store.detailedCase?.name }}
    </div>
    <div class="mt-2 text-gray-400 dark:text-gray-300">
      {{
        store.detailedCase?.submitTime
          ? new Date(store.detailedCase?.submitTime).toLocaleString()
          : new Date().toLocaleString()
      }}
    </div>
    <div class="mb-2 mt-2 break-all dark:text-gray-200">
      {{ store.detailedCase?.brief }}
    </div>
    <div class="mt-5 h-[0.105rem] bg-gray-200"></div>
    <div>
      <div>
        <PHChoiceList
          v-model="currentIndex"
          :choices="choices"
          @change-index="changeIndex"
        />
        <div class="h-[0.1rem] bg-gray-200"></div>
      </div>
      <div class="p-2">
        <RouterView />
      </div>
    </div>
  </div>
  <div v-else class="h-full w-full">
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
  caseId: number
}>()

onMounted(async () => {
  try {
    console.log(store)
    await store.getDetailedCase(props.caseId)
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
    path: `/case-detail/${props.caseId}/intro`
  },
  {
    path: `/case-detail/${props.caseId}/medicine`
  },
  {
    path: `/case-detail/${props.caseId}/vaccine`
  },
  {
    path: `/case-detail/${props.caseId}/assay`
  },
  {
    path: `/case-detail/${props.caseId}/charge`
  }
])

// 路径比对
const currentIndex = ref(
  routes.value.findIndex((item) => item.path === route.path)
)

const changeIndex = () => {
  router.replace(routes.value[currentIndex.value])
}
</script>
