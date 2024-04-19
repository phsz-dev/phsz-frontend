<template>
  <div class="fixed right-20 bottom-20">
    <div v-if="hidden">
      
    </div>
    <div v-else>
      <div class="bg-white p-4 rounded-lg shadow-lg">
        <h2 class="text-lg font-semibold">Chat Panel</h2>
        <p>Chat panel content...</p>
      </div>
    </div>
    <button class="float-right" @click="hidden = !hidden">
      {{ hidden ? 'Show' : 'Hide'}}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hidden = ref(false)
</script>
