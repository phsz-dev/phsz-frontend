<template>
  <transition name="modal-fade">
    <!-- 中间的弹窗 -->
    <div
      v-if="modal.show"
      class="fixed inset-0 z-50 bg-black bg-opacity-30"
    >
      <div
        class="absolute left-1/2 top-1/2 w-2/5 z-50 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-4 py-4 dark:bg-dark-block-600 max-h-[80vh] overflow-y-auto"
      >
        <div class="select-none text-xl font-bold dark:text-gray-200">
          {{ modal.title }}
        </div>

        <slot></slot>
            
        <div class="float-right mt-4">
          <button
            class="rounded-md border border-gray-300 px-4 py-2 text-sm dark:border-dark-block-500 dark:text-gray-200"
            @click.prevent="modal.cancel"
          >
            取消
          </button>
          <button
            class="ml-2 rounded-md bg-primary-500 px-4 py-2 text-sm text-white"
            @click.prevent="modal.confirm"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
  
<script setup lang="ts">
const modal = defineModel<{
  show: boolean
  title: string
  cancel: () => void
  confirm: () => void
}>({ required: true })
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
.modal-fade-enter-active,
.modal-fade-leave-active {
  animation-fill-mode: both;
}

.modal-fade-enter-active {
  animation: fadeIn 0.5s;
}

.modal-fade-leave-active {
  animation: fadeOut 0.5s;
}

::-webkit-scrollbar {
  display: none;
}
</style>
  