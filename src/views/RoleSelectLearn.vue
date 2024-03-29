<template>
    <div class="mx-auto max-w-7xl flex flex-row">
        <div class="flex-1 h-fit">
            <PHTwoLayerLeftMenu :title="titleArr[titleId]" :left_menu="convertToMenuLayers(leftMenu)" />
        </div>
        
        <div class="flex-[2_2_auto] h-fit"></div>
        
    </div>
</template>

<script setup lang="ts">
import PHTwoLayerLeftMenu from '../components/PHTwoLayerLeftMenu.vue'
import { useRoleStore } from '../stores/role';
import { useRoute } from 'vue-router';
import MenuLayer from '../types/MenuLayer';
import RoleResponsibility from '../types/RoleResponsibility';
const leftMenu = useRoleStore().roleResponsibility
const titleArr = ['前台', '医助', '兽医师']
const titleId = parseInt(useRoute().params.id as string)

function convertToMenuLayers(data: RoleResponsibility[]): MenuLayer[] {
  return data.map((item, index) => {
    const subMenu: MenuLayer[] = item.content ? item.content.map((subItem, subIndex) => {
      return {name: subItem.name, id: subIndex, subMenu: []}
    }) : [];
    return {name: item.name, id: index, subMenu}
  });
}

</script>