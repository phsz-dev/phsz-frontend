<template>
    <div class="mx-auto max-w-md py-4 flex flex-col">
        <input type="text" class="placeholder:text-gray-600 placeholder:dark:text-gray-200 outline-none p-4 my-2 bg-transparent border-b-gray-600 border-b-2 dark:border-b-gray-200 text-gray-600 dark:text-gray-200" placeholder="请输入用户名" />
        <input type="password" class="placeholder:text-gray-600 placeholder:dark:text-gray-200 outline-none p-4 my-2 bg-transparent border-b-2 border-b-gray-600 dark:border-b-gray-200 text-gray-600 dark:text-gray-200" placeholder="请输入密码" />
        <button class="p-3 w-56 my-8 mx-auto bg-primary-500 text-white rounded-full dark:text-gray-200 dark:!bg-dark-block-600" @click="login">
            登录
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