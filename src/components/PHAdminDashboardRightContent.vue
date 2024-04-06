<template>
  <div
    class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500"
  >
    <div class="flex flex-row items-center align-middle">
      <div class="h-3 w-3"></div>
      <div class="px-2 text-lg font-bold text-black dark:text-gray-200">
        用户管理
      </div>
    </div>

    <!-- 用户表格 id, username, email, role, enabled 5个字段 -->
    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-black dark:text-gray-200">
        <thead>
          <tr>
            <th scope="col" class="py-3 px-6">ID</th>
            <th scope="col" class="py-3 px-6">用户名</th>
            <th scope="col" class="py-3 px-6">邮箱</th>
            <th scope="col" class="py-3 px-6">角色</th>
            <th scope="col" class="py-3 px-6">状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList" :key="user.id">
            <td class="py-4 px-6">{{ user.id }}</td>
            <td class="py-4 px-6">{{ user.username }}</td>
            <td class="py-4 px-6">{{ user.email }}</td>
            <td class="py-4 px-6">{{ user.roles }}</td>
            <td class="py-4 px-6">{{ user.enabled }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { userList } = storeToRefs(store)
store.getUserList()
</script>

<style scoped>
</style>