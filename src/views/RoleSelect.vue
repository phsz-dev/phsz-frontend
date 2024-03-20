<template>
  <div class="w-screen h-screen fixed flex flex-row top-0">
    <div
      class="flex-1 h-full"
      v-for="(item, index) in roleItemList"
      :key="index"
    >
      <PHItemSelect :roleItem="item" :itemStatus="index % 2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PHItemSelect from '../components/PHRoleItemSelector.vue'
const roleItemList = [
  {
    id: 0,
    name: '前台',
    imageURI: '/src/assets/role/reception.webp'
  },
  {
    id: 1,
    name: '医助',
    imageURI: '/src/assets/role/assistant.webp'
  },
  {
    id: 2,
    name: '兽医师',
    imageURI: '/src/assets/role/doctor.webp'
  }
]
</script>
