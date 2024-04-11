<template>
  <div class="h-full rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500">
    <PHTableCaption :title="title" />

    <!-- 用户表格 id, username, email, role, enabled 5个字段 -->
    <div class="relative my-5 overflow-x-auto">
      <PHDataTable
        v-model="page.pageNumber"
        :headers="tableHeaders"
        :total-pages="page.totalPages"
      >
        <template #default>
          <tr v-for="user in page.content" :key="user.id">
            <td class="px-6 py-4">{{ user.id }}</td>
            <td class="px-6 py-4">{{ user.username }}</td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">{{ user.roles }}</td>
            <td class="flex items-center justify-start space-x-2 px-6 py-4">
              <span>{{ user.enabled ? '启用' : '禁用' }}</span>
              <div
                class="flex h-5 w-10 cursor-pointer items-center rounded-full bg-gray-400 p-0.5 duration-300 ease-in-out"
                :class="{ 'bg-green-400': user.enabled }"
                @click="toggleUserEnabled(user)"
              >
                <div
                  class="h-4 w-4 transform rounded-full bg-white shadow-md duration-300 ease-in-out"
                  :class="{ 'translate-x-5': user.enabled }"
                ></div>
              </div>
            </td>
          </tr>
        </template>
      </PHDataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
import PHTableCaption from '../components/PHTableCaption.vue'
import PHDataTable from '../components/PHDataTable.vue'
import UserInfo from '../types/User'
import { usePage } from '../composables'

const title = '用户管理'
const tableHeaders = [
  { text: 'ID', value: 'id' },
  { text: '用户名', value: 'username' },
  { text: '邮箱', value: 'email' },
  { text: '角色', value: 'roles' },
  { text: '状态', value: 'enabled' }
]

const store = useUserStore()

const toggleUserEnabled = (user: any) => {
  user.enabled = !user.enabled
  store.updateUser(user)
}

const { page } = usePage<UserInfo>('/api/users', 10, store.token)
</script>

<style scoped></style>
