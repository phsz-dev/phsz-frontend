<template>
  <div class="fixed top-0 flex h-screen w-screen flex-row items-center">
    <div
      v-for="(item, index) in roleItemList"
      :key="index"
      class="h-full flex-1"
    >
      <PHItemSelect :role-item="item" :item-status="index % 2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PHItemSelect from '../components/PHRoleItemSelector.vue'
const roleItemList = [
  {
    id: 0,
    name: '前台',
    imageURI: '/src/assets/role/reception.png',
    darkImageURI: '/src/assets/role/reception-dark.png',
    bg_color: '#FFC8C8'
  },
  {
    id: 1,
    name: '医助',
    imageURI: '/src/assets/role/assistant.png',
    darkImageURI: '/src/assets/role/assistant-dark.png',
    bg_color: '#FFE2C8'
  },
  {
    id: 2,
    name: '兽医师',
    imageURI: '/src/assets/role/doctor.png',
    darkImageURI: '/src/assets/role/doctor-dark.png',
    bg_color: '#FFF8C8'
  }
]
</script>
