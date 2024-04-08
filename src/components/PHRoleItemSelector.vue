<template>
  <div class="flex h-full cursor-pointer items-center">
    <img
      :src="isDark ? roleItem.darkImageURI : roleItem.imageURI"
      alt="role image"
      class="z-20 w-full transition-transform hover:z-10 hover:scale-125"
    />
    <div
      class="absolute z-20 w-1/3 p-4 text-center"
      :class="itemStatus == 0 ? 'top-28' : 'bottom-24'"
    >
      <!-- <div>{{roleItem.name}}</div> -->
      <div class="text-4xl font-bold text-black dark:text-gray-100">
        {{ roleItem.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()
defineProps({
  roleItem: {
    type: Object,
    required: true
  },
  itemStatus: {
    type: Number,
    required: true
  }
})
</script>
