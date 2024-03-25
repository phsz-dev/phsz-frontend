<template>
  <div class="mx-auto max-w-7xl">
    <!-- 模拟登录按钮 -->
    <button class="p-4 bg-primary-500 text-white rounded-lg" @click="login">
      模拟登录
    </button>
  </div>
</template>

<script setup lang="ts">

import { useUserStore } from '../stores/user';

const userStore = useUserStore();

const login = () => {
  // 模拟登录
  userStore.login();
}

</script>