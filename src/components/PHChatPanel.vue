<template>
  <div v-if="!testing" class="fixed bottom-14 right-14 z-50">
    <Transition name="phi-scale">
      <div v-if="!hidden" class="rounded-2xl bg-white shadow-xl w-[420px] h-[640px] overflow-hidden">
        <PHConversation>
        </PHConversation>
      </div>
    </Transition>
    <button
      class="mt-4 float-right flex size-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-xl transition-transform hover:scale-110"
      @click="hidden = !hidden"
    >
      <Transition name="phi-rotate" mode="out-in">
        <span v-if="hidden" id="chat-ai" class="font-bold">AI</span>
        <span
          v-else
          id="chat-down"
          class="phi-right-arrow size-6 rotate-90 bg-white"
        ></span>
      </Transition>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PHConversation from './PHConversation.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const hidden = ref(true)
const testing = ref(false)

// 监听 route 变化，隐藏聊天框
watch(() => route.path, (newPath) => {
  if (newPath.startsWith('/test')) {
    hidden.value = true
    testing.value = true
  } else {
    testing.value = false
  }
})
</script>

<style scoped>
.phi-scale-enter-active,
.phi-scale-leave-active {
  transition: transform 0.2s;
  transform-origin: bottom right;
}

.phi-scale-enter-from,
.phi-scale-leave-to {
  transform: scale(0);
}

.phi-scale-enter-to,
.phi-scale-leave-from {
  transform: scale(1);
}

.phi-rotate-enter-active {
  transition: transform 0.2s ease-out;
}

.phi-rotate-leave-active {
  transition: transform 0.2s ease-in;
}

#chat-ai.phi-rotate-leave-from,
#chat-ai.phi-rotate-enter-to {
  transform: rotate(0deg);
}

#chat-ai.phi-rotate-leave-to,
#chat-ai.phi-rotate-enter-from {
  transform: rotate(45deg) scale(0.2);
}

#chat-down.phi-rotate-enter-from,
#chat-down.phi-rotate-leave-to {
  transform: rotate(45deg);
}

#chat-down.phi-rotate-enter-to,
#chat-down.phi-rotate-leave-from {
  transform: rotate(90deg);
}
</style>
