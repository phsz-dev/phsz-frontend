<template>
  <div
    class="items-bottom h-full bg-contain bg-left-bottom bg-no-repeat"
    :class="backgroundClassArray[roleItem.id]"
  >
    <img :src="roleItem.imageURI" alt="role image" class="w-full h-full z-10" />
    <div>
      <p class="text-2xl font-bold z-20">{{ roleItem.name }}</p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">选择</button>
    </div>
  </div>
</template>

<script setup lang="ts">
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
const backgroundClassArray = [
  `bg-role-play-reception`,
  `bg-role-play-assistant`,
  `bg-role-play-doctor`
]
console.log(props.roleItem)
</script>
