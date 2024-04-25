<template>
  <div
    class="flex h-full flex-col rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500"
  >
    <PHTableCaption
      :title="title"
      :button-name="buttonName"
      :add-item="addItem"
    />
    <PHDataTable v-model="page" :headers="tableHeaders">
      <template #default>
        <tr v-for="user in page.content" :key="user.id">
          <td class="px-6 py-4">{{ user.id }}</td>
          <td class="px-6 py-4">{{ user.username }}</td>
          <td class="px-6 py-4">{{ user.email }}</td>
          <td class="px-6 py-4">
            <span
              v-for="role in user.roles"
              :key="role"
              class="mr-1 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800"
            >
              {{ role }}
            </span>
          </td>
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
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
import PHTableCaption from '../components/PHTableCaption.vue'
import PHDataTable from '../components/PHDataTable.vue'
import UserInfo from '../types/User'
import { usePage } from '../composables'

const title = '用户管理'
const buttonName = '添加用户'
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

const { page } = usePage<UserInfo>('/api/users', 12, store.token)

import { useDialogueStore } from '../stores/dialogue'

const dialogueStore = useDialogueStore()

const addDialogue = () => {
  dialogueStore.showDialogue({
    title: '这是一个弹窗',
    content: '这是弹窗的内容',
    showCancel: true,
    clickMaskClose: true,
    confirm: () => {
      console.log('点击了确定')
      dialogueStore.closeDialogue()
    },
    cancel: () => {
      console.log('点击了取消')
      dialogueStore.closeDialogue()
    }
  })
}

const addItem = () => {}
</script>

<style scoped></style>
