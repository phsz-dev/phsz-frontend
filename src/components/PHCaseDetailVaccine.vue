<template>
  <div class="p-2">
    <div
      v-if="
        store.detailedCase?.vaccines && store.detailedCase.vaccines.length > 0
      "
    >
      <div
        class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
      >
        <div class="flex-1">名称</div>
        <div class="flex-1">生产厂商</div>
        <div class="flex-1">有效期</div>
      </div>
      <div
        v-for="(item, index) in store.detailedCase?.vaccines"
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
            class="flex-1 hover:cursor-pointer hover:text-primary-500"
            :to="{ path: `/vaccine/${item.id}` }"
            v-if="item.name!='疫苗不存在'"
            >{{ item.name }}</RouterLink
          >
          <div
            v-else
            class="flex-1 hover:cursor-pointer hover:text-primary-500"
            @click="messageStore.addMessage(Message.partialMessage('疫苗不存在','error','top'))"
            >{{ item.name }}</div>
          <div class="flex-1">{{ item.manufacturer?item.manufacturer:"/" }}</div>
          <div class="flex-1">
            {{ item.expiryDate?new Date(item.expiryDate).toLocaleDateString():"/" }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-base font-bold text-black dark:!text-gray-200">
        无疫苗信息
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
