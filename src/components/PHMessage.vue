<template>
  <!-- <div v-for="(item,index) in store.messageQueue" :key="index"> -->
  <div
    v-for="(item, index) in store.messageQueue"
    :key="index"
    :class="{
      'left-0 top-0': index == 0,
      'left-1/2 top-0 -translate-x-1/2': index == 1,
      'right-0 top-0': index == 2,
      'bottom-0 left-0': index == 3,
      'bottom-0 left-1/2 -translate-x-1/2': index == 4,
      'bottom-0 right-0': index == 5
    }"
    class="fixed z-[100]"
  >
    <TransitionGroup
      :name="
        index == 0 || index == 1 || index == 2 ? 'list-top' : 'list-bottom'
      "
    >
      <div v-for="(inItem, inIndex) in item" :key="inIndex" class="w-80">
        <div
          v-if="inItem.type === 'success'"
          class="my-4 flex h-12 rounded-md border border-green-300 bg-green-100 px-4 text-green-700"
        >
          <!-- 一个svg，一个圆圈中间一个对勾 -->
          <div class="phi-message-success my-4 h-4 w-4 bg-green-500"></div>
          <p class="ml-3 py-1 text-sm leading-10">{{ inItem.content }}</p>
        </div>

        <div
          v-if="inItem.type === 'error'"
          class="my-4 flex h-12 rounded-md border border-red-300 bg-red-100 px-4 text-red-700 transition-all duration-300 ease-in-out"
          role="alert"
        >
          <!-- 一个svg，一个圆圈中间一个对勾 -->
          <div class="phi-message-fail my-4 h-4 w-4 bg-red-500"></div>
          <p class="ml-3 py-1 text-sm leading-10">{{ inItem.content }}</p>
        </div>
        <div
          v-if="inItem.type === 'warn'"
          class="my-4 flex h-12 rounded-md border border-yellow-300 bg-yellow-100 px-4 text-yellow-700 transition-all duration-300 ease-in-out"
          role="alert"
        >
          <!-- 一个svg，一个圆圈中间一个对勾 -->
          <div class="phi-message-warn my-4 h-4 w-4 bg-yellow-500"></div>
          <p class="ml-3 py-1 text-sm leading-10">{{ inItem.content }}</p>
        </div>
        <div
          v-if="inItem.type === 'normal'"
          class="my-4 flex h-12 rounded-md border border-gray-300 bg-gray-200 px-4 text-gray-800 transition-all duration-300 ease-in-out"
          role="alert"
        >
          <!-- 一个svg，一个圆圈中间一个对勾 -->
          <div class="phi-message-normal my-4 h-4 w-4 bg-gray-600"></div>
          <p class="ml-3 py-1 text-sm leading-10">{{ inItem.content }}</p>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useMessageStore } from '../stores/message'
const store = useMessageStore()
</script>

<style scoped>
/* 从上方划入 */
.list-top-move, /* 对移动中的元素应用的过渡 */
.list-top-enter-active,
.list-top-leave-active {
  transition: all 0.5s ease;
}

.list-top-enter-from,
.list-top-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.5s ease;
}

.list-bottom-move, /* 对移动中的元素应用的过渡 */
.list-bottom-enter-active,
.list-bottom-leave-active {
  transition: all 0.5s ease;
}

.list-bottom-enter-from,
.list-bottom-leave-to {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}
</style>
