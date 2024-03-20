<template>
    <div class="items-center h-full flex">
        <img :src="isDark?roleItem.darkImageURI:roleItem.imageURI" alt="role image" class="w-full transition-transform z-20 hover:scale-125 hover:z-10" />
        <div class="z-20 absolute w-1/3 p-4 text-center" :class="itemStatus == 0 ? 'top-28' : 'bottom-24'">
            <!-- <div>{{roleItem.name}}</div> -->
            <div class="text-4xl font-bold text-black dark:text-gray-100">{{roleItem.name}}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useDark } from '@vueuse/core';
const isDark = useDark();
const props = defineProps({
  roleItem: {
    type: Object,
    required: true
  },
  itemStatus: {
    type: Number,
    required: true
  }
})
console.log(props.roleItem)
</script>
