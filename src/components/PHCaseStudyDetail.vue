<template>
  <div
    class="w-full overflow-hidden overflow-y-scroll rounded-md bg-white px-4 py-1 dark:bg-dark-block-500"
    style="height: 98%"
  >
    <div
      v-for="(item, index) in store.roughCases.content"
      :key="index"
      class="border-b border-gray-300 p-2 py-4 hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      <RouterLink :to="{ path: '/case-detail/' + item.id }">
        <div class="flex items-center justify-between">
          <div class="text-lg font-bold dark:text-gray-200">
            {{ item.name }}
          </div>
          <div class="text-sm dark:text-gray-200">
            {{ new Date(parseInt(item.submitTime)).toLocaleString() }}
          </div>
        </div>
        <div
          class="mt-2 line-clamp-2 overflow-hidden text-ellipsis text-sm leading-6 text-gray-600 dark:text-gray-200"
        >
          {{ item.brief }}
        </div>
      </RouterLink>
    </div>
    <div class="h-3"></div>
    <!-- 翻页栏 -->
    <div class="mx-auto flex w-1/3 items-center justify-center">
      <div class="flex w-full items-center justify-around">
        <div
          class="flex h-6 w-20 items-center justify-center rounded-md bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-200"
        >
          上一页
        </div>
        <div class="text-gray-600 dark:text-gray-200">{{currentPage+1 + "/" + store.roughCases.totalPages}}</div>
        <div
          class="ml-2 flex h-6 w-20 items-center justify-center rounded-md bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-200"
        >
          下一页
        </div>
        <div class="text-gray-600 dark:text-gray-200">共{{store.roughCases.totalElements}}条</div>
      </div>
    </div>
    <div class="h-3"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted,ref } from 'vue'
import { useCaseStore } from '../stores/case';
const props = defineProps<{
  diseaseId: number
}>()
const currentPage = ref(0)

const store = useCaseStore()

onMounted(()=>{
  try{
    getRoughCases(currentPage.value,10)
  }catch(e){
    console.log(e)
  }
})

const getRoughCases = (currentPage:number ,pageSize:number ) => {
  store.getRoughCaseByDisease(props.diseaseId,currentPage,pageSize)
}

</script>
