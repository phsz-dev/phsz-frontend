<template>
  <div class="mx-auto flex max-w-7xl flex-row">
    <div v-if="computedLeftMenu.length > 0" class="h-fit flex-[2_2_0]">
      <PHTwoLayerLeftMenu
        v-model="id_arr"
        :title="titleArr[titleId]"
        :left-menu="computedLeftMenu"
      />
    </div>

    <div v-if="computedLeftMenu.length > 0" class="mx-3 h-96 flex-[6_6_0]">
      <PHRoleSelectLearnMiddleContent :current-index="id_arr" />
    </div>

    <div v-if="computedLeftMenu.length > 0" class="h-96 flex-1">
      <PHRoleSelectLearnRightProcessor
        v-if="computedLeftMenu.length > 0"
        v-model="id_arr"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PHTwoLayerLeftMenu from '../components/PHTwoLayerLeftMenu.vue'
import PHRoleSelectLearnMiddleContent from '../components/PHRoleSelectLearnMiddleContent.vue'
import PHRoleSelectLearnRightProcessor from '../components/PHRoleSelectLearnRightProcessor.vue'
import { useRoleStore } from '../stores/role'
import { useRoute } from 'vue-router'
import { ref, watch, onMounted, onDeactivated } from 'vue'
import RoleResponsibility from '../types/RoleResponsibility'
import MenuLayer from '../types/MenuLayer'
const store = useRoleStore()
const titleId = parseInt(useRoute().params.id as string)
onMounted(() => {
  try {
    store.getRoleResponsibility(titleId)
  } catch (error) {
    console.log(error)
  }
})

onDeactivated(() => {
  store.clearRoleResponsibility()
})

const titleArr = ['前台', '医助', '兽医师']

const convertToMenuLayers = (menu: RoleResponsibility[]): MenuLayer[] => {
  if (menu.length == 0) return []
  const result = menu.map((item) => {
    let obj: MenuLayer = {
      id: item.id,
      name: item.name,
      status: false,
      subResponsibilities: []
    }

    for (let it of item.subResponsibilities) {
      obj.subResponsibilities.push({
        id: it.id,
        name: it.name,
        status: false,
        subResponsibilities: []
      })
    }

    return obj
  })
  console.log(result)
  result[0].subResponsibilities[0].status = true
  return result
}

const computedLeftMenu = ref(convertToMenuLayers(store.roleResponsibility))

watch(
  () => store.roleResponsibility,
  (newVal) => {
    computedLeftMenu.value = convertToMenuLayers(newVal)
  }
)

const id_arr = ref([0, 0, 0])
</script>
