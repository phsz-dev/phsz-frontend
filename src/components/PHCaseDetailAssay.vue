<template>
  <div class="p-2">
    <div class="rounded-md">
      <div
        class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
      >
        <div class="flex-[2_2_0%]">名称</div>
        <div class="flex-[2_2_0%]">检查结果</div>
        <div class="flex-[2_2_0%]">开药日期</div>
      </div>
      <div
        v-for="(item, index) in store.detailedCase?.assays"
        :key="index"
        class="px-2 py-3"
        :class="
          index % 2 === 0
            ? 'bg-secondary-50 dark:bg-gray-800'
            : 'bg-secondary-100/60 dark:bg-gray-700'
        "
      >
        <div
          class="flex w-full flex-row text-base text-black dark:!text-gray-200"
        >
          <RouterLink
            class="flex-[2_2_0%] hover:cursor-pointer hover:text-primary-500"
            :to="{ path: `/assay/${item.id}` }"
            v-if="item.name!='检查不存在'"
            >{{ item.name }}</RouterLink
          >
          <div
            class="flex-[2_2_0%] hover:cursor-pointer hover:text-primary-500"
            v-else
            @click="messageStore.addMessage(Message.partialMessage('检查不存在','error','top'))"
            >{{ item.name }}</div
          >
          <div class="flex-[2_2_0%]">{{ item.result?item.result:"/" }}</div>
          <div class="flex-[2_2_0%]">
            {{ item.date?new Date(item.date).toLocaleDateString():"/" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from '../stores/case'
import { useMessageStore } from '../stores/message';
import Message from '../types/message';
const messageStore = useMessageStore()
const store = useCaseStore()
</script>
