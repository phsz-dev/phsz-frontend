<template>
  <transition name="dialogue-fade">
    <!-- 中间的弹窗 -->
    <div
      v-if="store.dialogue"
      @click="closeWithMask"
      class="fixed inset-0 z-50 bg-black bg-opacity-30"
    >
      <div
        class="absolute left-1/2 top-1/2 z-50 w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-4 py-4 dark:bg-dark-block-600"
      >
        <div class="select-none text-xl font-bold dark:text-gray-200">
          {{ store.dialogue.title }}
        </div>
        <div class="mt-2 break-all text-base dark:text-gray-200">
          {{ store.dialogue.content }}
        </div>
        <div class="float-right mt-4">
          <button
            @click.prevent="store.dialogue?.cancel"
            v-if="store.dialogue.showCancel"
            class="rounded-md border border-gray-300 px-4 py-2 text-sm dark:border-dark-block-500 dark:text-gray-200"
          >
            取消
          </button>
          <button
            @click.prevent="store.dialogue?.confirm"
            class="ml-2 rounded-md bg-red-500 px-4 py-2 text-sm text-white"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { useDialogueStore } from '../stores/dialogue'
const store = useDialogueStore()

const closeWithMask = () => {
  if (store.dialogue?.clickMaskClose) {
    store.closeDialogue()
  }
}
</script>

<style scoped>
/* 定义渐入渐出效果的关键帧动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* 应用到Vue的transition组件 */
.dialogue-fade-enter-active,
.dialogue-fade-leave-active {
  animation-fill-mode: both;
}

.dialogue-fade-enter-active {
  animation: fadeIn 0.5s;
}

.dialogue-fade-leave-active {
  animation: fadeOut 0.5s;
}
</style>
