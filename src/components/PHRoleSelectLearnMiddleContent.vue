<template>
  <div
    class="h-fit w-full rounded-sm bg-white px-3 py-3 dark:bg-dark-block-600"
  >
    <div class="text-black dark:text-gray-200" v-html="processContent"></div>
    <div class="mt-8 flex select-none justify-around text-center">
      <button
        v-if="id_arr[2] > 0"
        class="mx-2 flex-1 rounded-md border border-gray-400 px-6 py-2 text-left text-sm hover:border-secondary-500 hover:text-secondary-500 dark:border-gray-200 dark:text-gray-200"
        @click="id_arr[2] <= 0 ? (id_arr[2] = 0) : id_arr[2]--"
      >
        <div>上一步</div>
        <div>
          {{
            store.roleResponsibility[id_arr[0]].subResponsibilities[id_arr[1]]
              .procedures[id_arr[2] - 1].name
          }}
        </div>
      </button>
      <div v-else class="mx-2 h-16 flex-1 px-6">
        
      </div>
      <button
        v-if="
          id_arr[2] <
          store.roleResponsibility[id_arr[0]].subResponsibilities[id_arr[1]]
            .procedures.length -
            1
        "
        class="mx-2 h-16 flex-1 rounded-md border border-gray-400 px-6 py-2 text-right text-sm hover:border-secondary-500 hover:text-secondary-500 dark:border-gray-200 dark:text-gray-200"
        @click="
          id_arr[2] <
          store.roleResponsibility[id_arr[0]].subResponsibilities[id_arr[1]]
            .procedures.length -
            1
            ? id_arr[2]++
            : id_arr[2]
        "
      >
        <div>下一步</div>
        <div>
          {{
            store.roleResponsibility[id_arr[0]].subResponsibilities[id_arr[1]]
              .procedures[id_arr[2] + 1].name
          }}
        </div>
      </button>
      <div v-else class="mx-2 h-16 leading-10 flex-1 px-6 rounded-md border border-gray-400 py-2 text-right text-sm hover:border-secondary-500 hover:text-secondary-500 dark:border-gray-200 dark:text-gray-200 items-center">
        <div @click="completeChapter">完成本章节</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoleStore } from '../stores/role'
import { computed } from 'vue'
import { useMessageStore } from '../stores/message';
import Message from '../types/message';
import router from '../router';

const id_arr = defineModel<number[]>({ required: true })
const store = useRoleStore()
const messageStore = useMessageStore()

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

const completeChapter = async() => {
  try{
    if(id_arr.value[2] != store.roleResponsibility[id_arr.value[0]].subResponsibilities[id_arr.value[1]].procedures.length - 1){
      return
    }
    if(store.learnedSubResponsibility?.findIndex((item) => item == store.roleResponsibility[id_arr.value[0]].subResponsibilities[id_arr.value[1]].id) != -1){
      messageStore.addMessage(Message.partialMessage('已经学习过了', 'warn','top'))
      return
    }
    await store.addLearnedRoleSubResponsibility(
      store.roleResponsibility[id_arr.value[0]].subResponsibilities[id_arr.value[1]].id
    )
    // 刷新界面
    router.go(0)
  }catch{
    console.log('completeChapter error')
  }
  
}
</script>
