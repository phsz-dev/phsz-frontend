<template>
  <div
    class="relative mx-auto flex h-full w-full max-w-5xl flex-col rounded-3xl p-8 sm:h-[32rem] sm:w-[40rem] sm:flex-none sm:bg-white xl:w-[50rem] 2xl:w-[72rem] dark:bg-dark-block-600"
  >
    <div class="py-8 text-4xl"><PHLogo /></div>
    <div class="h-full sm:flex sm:flex-row">
      <div class="flex-1">
        <div class="text-4xl text-black dark:text-gray-200">
          {{ title }}
        </div>
        <div class="text-md py-4 text-black dark:text-gray-200">
          {{ subTitle }}
        </div>
      </div>

      <div class="flex-1">
        <slot></slot>
      </div>
      <div class="absolute bottom-0 right-10 flex flex-row">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PHLogo from './PHLogo.vue'
defineProps<{
  title: string
  subTitle: string
}>()
</script>

<style scoped></style>
