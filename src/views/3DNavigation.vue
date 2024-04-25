<template>
  <div>
    <TresCanvas
      ref="canvas"
      window-size
      shadows
      :clear-color="dark ? '#000' : '#f4f8ff'"
      @click="onCanvasClick"
    >
      <!-- 定义相机 -->
      <!-- 正交投影，适合平面图 -->
      <!-- <TresOrthographicCamera :position="[0, 0, 100]" :look-at="[0,0,0]" /> -->
      <TresPerspectiveCamera :position="[50, 50, 100]" :look-at="[0, 0, 0]" />
      <TresAmbientLight :intensity="0.5" />
      <!-- <TresDirectionalLight
        ref="lightRef"
        v-light-helper
        cast-shadow
        :position="[0, 60, 50]"
        :intensity="1.5"
      /> -->
      <OrbitControls />

        <!-- 右墙 -->
        <TresMesh cast-shadow :position="[25, 3, 0]">
          <TresBoxGeometry :args="[1, 6, 49]" />
          <TresMeshStandardMaterial color="#FFCC00" />
        </TresMesh>
      <!-- 左墙 -->
      <TresMesh cast-shadow :position="[-25, 3, 0]">
        <TresBoxGeometry :args="[1, 6, 49]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <!-- 后墙 -->
      <TresMesh cast-shadow :position="[0, 3, -25]">
        <TresBoxGeometry :args="[49, 6, 1]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <!-- 前墙 -->
      <TresMesh cast-shadow :position="[0, 3, 25]">
        <TresBoxGeometry :args="[49, 6, 1]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[20, 3, 15]">
        <TresBoxGeometry :args="[10, 6, 0.5]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[20, 3, 5]">
        <TresBoxGeometry :args="[10, 6, 0.5]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[20, 3, -5]">
        <TresBoxGeometry :args="[10, 6, 0.5]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[20, 3, -15]">
        <TresBoxGeometry :args="[10, 6, 0.5]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[15, 3, 0]">
        <TresBoxGeometry :args="[0.5, 6, 49]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[0, 3, 20]">
        <TresBoxGeometry :args="[0.5, 6, 10]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[-8, 3, 20]">
        <TresBoxGeometry :args="[0.5, 6, 10]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[-16, 3, 20]">
        <TresBoxGeometry :args="[0.5, 6, 10]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[-12.5, 3, 15]">
        <TresBoxGeometry :args="[25, 6, 0.5]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[0, 3, -20]">
        <TresBoxGeometry :args="[0.5, 6, 10]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[-8, 3, -20]">
        <TresBoxGeometry :args="[0.5, 6, 10]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[-16, 3, -20]">
        <TresBoxGeometry :args="[0.5, 6, 10]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh cast-shadow :position="[-12.5, 3, -15]">
        <TresBoxGeometry :args="[25, 6, 0.5]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <!-- 正中间放一个平放的甜甜圈，作为前台 -->
      <TresMesh
        cast-shadow
        :position="[0, 2, 0]"
        :rotation="[Math.PI / 2, 0, 0]"
      >
        <TresTorusGeometry :args="[4, 2, 16, 200]" />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>

      <TresMesh
        receive-shadow
        :position="[0, 0, 0]"
        :rotation="[-Math.PI / 2, 0, 0]"
      >
        <TresPlaneGeometry :args="[60, 60]" />
        <TresMeshStandardMaterial color="#f7f7f7" />
      </TresMesh>
    </TresCanvas>
    <Transition name="fade">
      <div
        v-if="selected"
        class="fixed right-8 top-1/2 h-1/2 w-1/4 -translate-y-1/2 bg-white/75"
      >
        <div class="p-4">
          <h2 class="text-lg font-bold">{{ markers[selected].name }}</h2>
          <p class="text-sm">{{ markers[selected].description }}</p>
        </div>
        <RouterLink
          :to="{ path: `/3d-navigation-inner/${markers[selected].id}` }"
          class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-secondary-500 px-4 py-2 text-white"
          >前往{{ markers[selected].name }}</RouterLink
        >
      </div>
    </Transition>
    <!-- <PHLoadingIcon v-if="!resolveState" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> -->
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
const dark = useDark()

import { TresCanvas, TresContext, useTexture } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import Marker from '../types/Marker'



const markers: Record<string, Marker> = {
  '1': {
    id: 1,
    position: [1, 0, 1],
    name: '医院走廊',
    description: '医院走廊，这是一个走廊'
  },
  '2': {
    id: 2,
    position: [9, 0, -6],
    name: '病房',
    description: '这是一个病房'
  }
}

const markers_group = new THREE.Group()

const canvas = ref<InstanceType<typeof TresCanvas>>()
let context: TresContext

onMounted(async () => {
  context = canvas.value!.context!
  context.scene.value.add(markers_group)

  const light = new THREE.DirectionalLight(0xffffff, 1.5)
  light.position.set(0, 60, 50)
  light.castShadow = true
  light.shadow.camera.left = -38
  light.shadow.camera.right = 38
  light.shadow.camera.bottom = -38
  light.shadow.camera.top = 38
  light.position.set(30, 50, 30)

  context.scene.value.add(light)

  const markerUrl = '/map_marker.svg'
  const markerTexture = await useTexture([markerUrl])

  // 添加地图标记
  for (const key in markers) {
    const marker = markers[key]
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: markerTexture,
        depthTest: false,
        depthWrite: false
      })
    )
    sprite.name = key
    sprite.scale.set(0.4, 0.6, 1)
    sprite.center.set(0.5, 0)
    sprite.position.set(...marker.position)
    markers_group.add(sprite)
  }
})

const selected = ref<string | null>(null)

let raycaster = new THREE.Raycaster()

const onCanvasClick = (e: MouseEvent) => {
  e.preventDefault()
  let mouse = new THREE.Vector2()
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(mouse, context.camera.value!)
  var intersects = raycaster.intersectObject(markers_group, true)
  if (intersects.length > 0) {
    // 按照距离排序
    intersects.sort((a, b) => a.distance - b.distance)
    selected.value = intersects[0].object.name
    console.log('selected:', selected.value)
  } else {
    selected.value = null
  }
}
</script>

<style scoped>
.slide-enter-from,
.slide-enter-to,
.slide-leave-to,
.slide-leave-from {
  transform: translateY(-64px);
}

.slide-leave-active {
  transition: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translate(100%, -50%);
  opacity: 0;
}
</style>
