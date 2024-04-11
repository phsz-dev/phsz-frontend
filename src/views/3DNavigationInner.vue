<template>
    <div>
      <div class="fixed text-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-black dark:text-white opacity-20">+</div>
      <TresCanvas
        ref="canvas"
        window-size
        :clear-color="dark ? '#000' : '#f4f8ff'"
        @click="onCanvasClick"
      >
        <TresPerspectiveCamera :position="[0, 0, 0]" />
        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight cast-shadow :position="[0, 20, 0]" :intensity="1" />
        <!-- <OrbitControls /> -->
        <PointerLockControls make-default  />
        <KeyboardControls :moveSpeed="0.1"/>
        <Suspense @resolve="(resolveState = true)" @pending="(resolveState = false)">
          <GLTFModel
            :path="models[modelId-1].path"
            :scale="models[modelId-1].scale"
            :position="models[modelId-1].position"
          />
        </Suspense>
  
        <!-- <TresMesh>
          <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
          <TresMeshBasicMaterial color="orange" />
        </TresMesh> -->
        <!-- <TresGridHelper /> -->
        <!-- 在xz平面上加一块淡灰色的板 -->
        <!-- <TresMesh :position="[0, -1.3, 0]" :rotation="[-Math.PI / 2, 0, 0]">
          <TresPlaneGeometry :args="[32, 32]" />
          <TresMeshBasicMaterial color="#cccccc" />
        </TresMesh> -->
      </TresCanvas>
      <Transition name="fade">
        <div
          v-if="selected"
          class="fixed right-8 top-1/2 h-1/2 w-1/4 -translate-y-1/2 bg-white/75"
        >
          <div class="p-4">
            <h2 class="text-lg font-bold">{{ marksList[modelId-1].find(item => item.name == selected)?.name }}</h2>
            <p class="text-sm">{{ marksList[modelId-1].find(item => item.name == selected)?.description }}</p>
          </div>
        </div>
      </Transition>
      <PHLoadingIcon
        v-if="!resolveState"
        class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { useDark } from '@vueuse/core'
  import {useRoute} from 'vue-router'
  const dark = useDark()
  const modelId = parseInt(useRoute().params.id as string)
  const resolveState = ref(false)

  const models = [
    {
      id: 1,
      name: '医院走廊',
      path: '/models/hospital-corridor/hosipital-corridor.gltf',
      scale: 0.05,
      position: [0,-1.5,0]
    },
    {
      id: 2,
      name: '病房',
      path: '/models/hospital-bedroom/hospital-bedroom.gltf',
      scale: 0.3,
      position: [55,-4,100]
    }
  ]
  
  import { TresCanvas, TresContext, useTexture } from '@tresjs/core'
  import { GLTFModel,  PointerLockControls, KeyboardControls } from '@tresjs/cientos'
  import * as THREE from 'three'
  import { onMounted, ref } from 'vue'
  import Marker from '../types/Marker'
  import PHLoadingIcon from '../components/PHLoadingIcon.vue'
  
//   const markers: Record<string, Marker> = {
//     '1': {
//       id: 1,
//       position: [1, 0, 1],
//       name: '医院走廊',
//       description: '医院走廊，这是一个走廊'
//     },
//     '2': {
//       id: 2,
//       position: [9, 0, -6],
//       name: '病房',
//       description: '这是一个病房'
//     }
//   }

const marksList:Marker[][] = [
    [
        {
            id: 1,
            name: '前台咨询处',
            description: '前台咨询处，可以进行询问',
            position: [-1, 0, 0],
        },
        {
            id: 2,
            name: '诊室二',
            description: '这是诊室二',
            position: [3, 0, 2.4],
        }
    ],
    [
        {
            id: 1,
            name: '病床',
            description: '这是一个病床，可以躺',
            position: [4, 0, -11],
        },
        {
            id: 2,
            name: '洗手七步法',
            description: '这是洗手七步法：内、外、夹、弓、大、立、腕',
            position: [-3.5,2, -4.3],
        }
    ]
]
  
  const markers_group = new THREE.Group()
  
  const canvas = ref<InstanceType<typeof TresCanvas>>()
  let context: TresContext
  
  onMounted(async () => {
    context = canvas.value!.context!
    context.scene.value.add(markers_group)
  
    const markerUrl = '/map_marker.svg'
    const markerTexture = await useTexture([markerUrl])
  
    // 添加地图标记
    for (const item of marksList[modelId-1]) {
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: markerTexture,
          depthTest: false,
          depthWrite: false
        })
      )
      sprite.name = item.name?item.name:''
      sprite.scale.set(0.4, 0.6, 1)
      sprite.center.set(0.5, 0)
      sprite.position.set(item.position[0], item.position[1], item.position[2])
      markers_group.add(sprite)
    }
  })
  
  
  const selected = ref<string | null>(null)
  
  let raycaster = new THREE.Raycaster()
  
  const onCanvasClick = (e: MouseEvent) => {
    e.preventDefault()
    let mouse = new THREE.Vector2()
    // mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    // mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    // 鼠标移动到canvas中心
    mouse.x = 0
    mouse.y = 0
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
  