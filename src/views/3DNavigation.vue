<template>
  <TresCanvas
    ref="canvas"
    window-size
    :clear-color="dark ? '#000' : '#fff'"
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
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core'
const dark = useDark()

import { TresCanvas, TresContext, useTexture } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import * as THREE from 'three'
import { onMounted, ref } from 'vue'

const markers : Record<string, { position: [number, number, number] }> = {
  '1': { position: [3, 0, 3] },
  '2': { position: [-3, 0, -3] },
}

const markers_group = new THREE.Group()

// 地图标记
const markerUrl = '/map_marker.svg'

const canvas = ref<any>(null)
let context : TresContext

onMounted(async () => {
  context = canvas.value.context
  context.scene.value.add(markers_group)

  const markerTexture = await useTexture([markerUrl])

  // 添加地图标记
  for (const key in markers) {
    const marker = markers[key]
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: markerTexture }))
    sprite.name = key
    sprite.scale.set(0.4, 0.6, 1)
    sprite.center.set(0.5, 0)
    sprite.position.set(...marker.position)
    markers_group.add(sprite)
  }
})

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
    console.log(intersects[0].object.name)
  }
}
</script>