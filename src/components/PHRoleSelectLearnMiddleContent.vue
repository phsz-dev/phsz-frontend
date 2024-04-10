<template>
  <div
    class="h-fit w-full rounded-sm bg-white px-3 py-3 dark:bg-dark-block-600"
  >
    <div class="text-black dark:text-gray-200" v-html="processContent"></div>
    <div class="mt-8 flex justify-around text-center select-none">
      <button
        @click="id_arr[2]<=0?id_arr[2]=0:id_arr[2]--"
        v-if="id_arr[2] > 0"
        class="mx-2 py-2 px-6 flex-1 rounded-md border border-gray-400 text-left text-sm hover:border-secondary-500 hover:text-secondary-500 dark:border-gray-200 dark:text-gray-200"
      >
        <div>上一步</div>
        <div>{{store.roleResponsibility[id_arr[0]].subResponsibilities[id_arr[1]].procedures[id_arr[2]-1].name}}</div>
      </button>
      <div
        v-else
        class="mx-2 h-16 flex-1 px-6"
      >
      </div>
      <button
        @click="id_arr[2] <
          store.roleResponsibility[id_arr[0]].subResponsibilities[id_arr[1]]
            .procedures.length -
            1?id_arr[2]++:id_arr[2]"
        v-if="
          id_arr[2] <
          store.roleResponsibility[id_arr[0]].subResponsibilities[id_arr[1]]
            .procedures.length -
            1
        "
        class="mx-2 py-2 px-6 h-16 flex-1 rounded-md border border-gray-400 text-right text-sm hover:border-secondary-500 hover:text-secondary-500 dark:border-gray-200 dark:text-gray-200"
      >
        <div>下一步</div>
        <div>{{store.roleResponsibility[id_arr[0]].subResponsibilities[id_arr[1]].procedures[id_arr[2]+1].name}}</div>
      </button>
      <div
        v-else
        class="mx-2 h-16 flex-1 px-6"
      >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoleStore } from '../stores/role'
import { computed } from 'vue'

const id_arr = defineModel<number[]>({ required: true })
const store = useRoleStore()

const processContent = computed(() => {
  if (
    store.roleResponsibility[id_arr.value[0]].subResponsibilities.length == 0
  ) {
    return ''
  }
  if (
    store.roleResponsibility[id_arr.value[0]].subResponsibilities[
      id_arr.value[1]
    ].procedures.length == 0
  ) {
    return ''
  }
  return store.roleResponsibility[id_arr.value[0]].subResponsibilities[
    id_arr.value[1]
  ].procedures[id_arr.value[2]].content
})
</script>
