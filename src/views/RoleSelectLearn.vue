<template>
  <div class="mx-auto flex max-w-7xl flex-row">
    <div class="h-fit flex-[2_2_0]">
      <PHTwoLayerLeftMenu
        v-model="menu_id"
        :title="titleArr[titleId]"
        :left-menu="convertToMenuLayers(leftMenu)"
      />
    </div>

    <div class="mx-3 h-96 flex-[6_6_0]">
      <PHRoleSelectLearnMiddleContent :current-index="currentIndex" />
    </div>

    <div class="h-96 flex-1">
      <PHRoleSelectLearnRightProcessor v-model="currentIndex" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PHTwoLayerLeftMenu from '../components/PHTwoLayerLeftMenu.vue'
import PHRoleSelectLearnMiddleContent from '../components/PHRoleSelectLearnMiddleContent.vue'
import PHRoleSelectLearnRightProcessor from '../components/PHRoleSelectLearnRightProcessor.vue'
import { useRoleStore } from '../stores/role'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import MenuLayer from '../types/MenuLayer'
import RoleResponsibility from '../types/RoleResponsibility'
const leftMenu = useRoleStore().roleResponsibility
const titleArr = ['前台', '医助', '兽医师']
const titleId = parseInt(useRoute().params.id as string)

function convertToMenuLayers(data: RoleResponsibility[]): MenuLayer[] {
  const result = data.map((item, index) => {
    const subMenu: MenuLayer[] = item.content
      ? item.content.map((subItem) => {
          return {
            name: subItem.name,
            id: subItem.id,
            subMenu: [],
            status: false
          }
        })
      : []
    return { id: index, name: item.name, subMenu, status: false }
  })
  result[0].status = true
  return result
}

const currentIndex = ref(0)
const menu_id = ref(leftMenu[0].content[0].id)
</script>
