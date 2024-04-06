<template>
  <div>
    <TresCanvas
      ref="canvas"
      window-size
      :clear-color="dark ? '#000' : '#f4f8ff'"
      @click="onCanvasClick"
    >
      <TresPerspectiveCamera :position="[5, 5, 5]" />
      <OrbitControls />

      <TresMesh>
        <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
        <TresMeshBasicMaterial color="orange" />
      </TresMesh>
      <TresGridHelper />
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
      </div>
    </Transition>
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
    position: [3, 0, 3],
    name: '手术室',
    description: '这是一个手术室'
  },
  '2': {
    id: 2,
    position: [-3, 0, -3],
    name: '病房',
    description: '这是一个病房'
  }
}

const markers_group = new THREE.Group()

const canvas = ref<any>(null)
let context: TresContext

onMounted(async () => {
  context = canvas.value.context
  context.scene.value.add(markers_group)

  const markerUrl = '/map_marker.svg'
  const markerTexture = await useTexture([markerUrl])

  // 添加地图标记
  for (const key in markers) {
    const marker = markers[key]
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: markerTexture })
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
