<template>
<div>
    <div
      class="mx-4 border-b-2 border-gray-300 py-3 text-lg text-black dark:border-zinc-500 dark:text-gray-200"
    >
        病例收藏
    </div>
    <div>
      <div v-for="(item,index) in userStore.collectPageInfo?.content" :key="index" class="py-3 px-1 mx-4 border-gray-400 border-b">
        <PHRoughCase :rough-case="item" />
      </div>
      <!-- 翻页 -->
      <div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from '../stores/user';
import PHRoughCase from './PHRoughCase.vue';
const userStore = useUserStore();


onMounted(() => {
    userStore.getCollectedCase(0,8);
});
</script>