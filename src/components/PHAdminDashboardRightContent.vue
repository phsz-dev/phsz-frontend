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
          <tr v-for="user in store.userList.content" :key="user.id">
            <td class="py-4 px-6">{{ user.id }}</td>
            <td class="py-4 px-6">{{ user.username }}</td>
            <td class="py-4 px-6">{{ user.email }}</td>
            <td class="py-4 px-6">{{ user.roles }}</td>
            <td class="py-4 px-6 flex items-center justify-start space-x-2">
              <span>{{ user.enabled ? '启用' : '禁用' }}</span>
              <div
                class="cursor-pointer w-10 h-5 flex items-center bg-gray-400 rounded-full p-0.5 duration-300 ease-in-out"
                :class="{ 'bg-green-400': user.enabled }"
                @click="toggleUserEnabled(user)"
              >
                <div
                  class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
                  :class="{ 'translate-x-5': user.enabled }"
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-center items-center mt-4">
      <button
        class="p-2 border rounded"
        @click="currentPage > 1 && currentPage-- && updateUserList(currentPage)"
      >上一页</button>
      <span class="px-4">{{ currentPage + '/' + store.userList.totalPages }}</span>
      <button
        class="p-2 border rounded"
        @click="currentPage < store.userList.totalPages && currentPage++ && updateUserList(currentPage)"
      >下一页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { ref } from 'vue'

const store = useUserStore()
store.getUserList(0, 10)

let currentPage = ref(1)

const updateUserList = (page: number) => {
  store.getUserList((page - 1) * 10, 10)
}

const toggleUserEnabled = (user: any) => {
  user.enabled = !user.enabled
  store.updateUser(user)
}
</script>

<style scoped>
</style>