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
    <div class="overflow-x-auto relative my-5">
      <table class="w-full text-sm text-left text-black dark:text-gray-200">
        <thead>
          <tr>
            <th 
              scope="col" 
              class="py-3 px-6 flex justify-between cursor-pointer items-center group"
              :class="{ 'bg-gray-500': sortKey === 'id' }"
              @click="sortBy('id')"
            >
              ID
              <span v-if="sortKey === 'id'" class="flex items-center">
                <span v-if="sortOrder === 1">↑</span>
                <span v-else>↓</span>
              </span>
            </th>
            <th scope="col" class="py-3 px-6 cursor-pointer">用户名</th>
            <th scope="col" class="py-3 px-6 cursor-pointer">邮箱</th>
            <th scope="col" class="py-3 px-6 cursor-pointer">角色</th>
            <th scope="col" class="py-3 px-6 cursor-pointer">状态</th>
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

    <PHPageination
      v-model="currentPage"
      :total-pages="store.userList.totalPages"
      @prev-page="updateUserList(currentPage)"
      @next-page="updateUserList(currentPage)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useUserStore } from '../stores/user'
import PHPageination from '../components/PHPagination.vue'

const store = useUserStore()
store.getUserList(0, 10)

let currentPage = 1
const sortKey = ref<string>('')
const sortOrder = ref<number>(0) // 0: 无序, 1: 升序, -1: 降序

const updateUserList = (page: number) => {
  store.getUserList(page - 1, 10)
}

const toggleUserEnabled = (user: any) => {
  user.enabled = !user.enabled
  store.updateUser(user)
}

const sortBy = (key: string) => {
  sortKey.value = key
  // [0, 1, -1]中循环
  sortOrder.value = (sortOrder.value + 2) % 3 - 1
  if (sortOrder.value === 0) {
    sortKey.value = ''
    store.getUserList(0, 10)
  } else {
    store.sortUserList(key, sortOrder.value)
  }
}
</script>

<style scoped>
</style>