<template>
  <div
    class="flex h-full flex-col rounded-md bg-white px-3 py-3 dark:!bg-dark-block-500"
  >
    <PHModal v-if="itemModal" v-model="itemModal">
      <slot></slot>
    </PHModal>
    <PHTableCaption
      :title="title"
      :button-name="buttonName"
      :add-item="() => $emit('add-item')"
    />
    <PHSearchBar
      v-model="searchText"
      :placeholder="'phrase in:field1,field2'"
      @search="dealSearch"
    />
    <PHDataTable
      v-model="page"
      :headers="tableHeaders"
      :total-pages="page.totalPages"
    >
      <tr
        v-for="item in page.content"
        :key="item.id"
        class="hover:cursor-pointer hover:bg-secondary-50 hover:dark:bg-dark-block-400"
        @click="$emit('revise-item', item.id)"
      >
        <td
          v-for="header in tableHeaders"
          :key="header.value"
          class="px-6 py-4"
        >
          <template v-if="header.type === 'time'">
            {{ new Date(item[header.value]).toLocaleDateString() }}
          </template>
          <template v-else-if="header.transform">
            {{ header.transform(item[header.value]) }}
          </template>
          <template v-else>
            {{ item[header.value] }}
          </template>
        </td>
        <button class=" text-red-500 text-base font-bold py-4 mr-2 rounded" @click="showDialogue(item.id)" >
          删除
        </button>
      </tr>
    </PHDataTable>
  </div>
</template>

<script setup lang="ts">
import PHModal from '../components/PHModal.vue'
import PHTableCaption from '../components/PHTableCaption.vue'
import PHSearchBar from '../components/PHSearchBar.vue'
import PHDataTable from '../components/PHDataTable.vue'
import { usePage } from '../composables'
import { ref } from 'vue'
import { useSearchStore } from '../stores/search'
import { useDialogueStore } from '../stores/dialogue'
import { useMessageStore } from '../stores/message'
import Message from '../types/message'
import ApiService from '../http'

const searchStore = useSearchStore()

const props = defineProps<{
  title: string
  buttonName?: string
  tableHeaders: { text: string; value: string; type?: string; transform?: (value: any) => string }[]
  url: string
}>()

const { page, url, params } = usePage<any>(props.url, 10)
const searchText = ref('')
const dealSearch = async () => {
  console.log(searchText)
  if (searchText.value === '') {
    url.value = props.url
    params.value = {}
  } else {
    const obj = await searchStore.dealWithSearchText(
      searchText.value,
      props.tableHeaders
    )
    console.log(obj)
    url.value = props.url + '/search'
    params.value = obj
  }
}

const itemModal = defineModel<{
  show: boolean
  title: string
  cancel: () => void
  confirm: () => void
}>()

defineEmits<{
  'add-item': [],
  'revise-item': [number]
}>()

const apiService = new ApiService('')
const msgStore = useMessageStore()

const deleteItem = async (id: number) => {
  try {
    await apiService.delete(`${props.url}/${id}`)
    page.value.content = page.value.content.filter((item: any) => item.id !== id)
  } catch (error) {
    msgStore.addMessage(
      Message.topError(`删除失败: ${error}`)
    )
  }
}

const dialogueStore = useDialogueStore()

const showDialogue = (id: number) => {
  dialogueStore.showDialogue({
    title: '警告⚠️',
    content: '确定删除吗？',
    showCancel: true,
    clickMaskClose: false,
    confirm: async () => {
      await deleteItem(id)
      dialogueStore.closeDialogue()
    },
    cancel: () => {
      dialogueStore.closeDialogue()
    }
  })
}
</script>

<style scoped></style>
