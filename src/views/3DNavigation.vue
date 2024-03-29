<template>
  <TresCanvas
    :clear-color="dark ? '#000' : '#fff'"
    window-size
  >
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>
  </TresCanvas>
</template>

<script lang="ts" setup>
import { TresCanvas } from '@tresjs/core'
import { useDark } from '@vueuse/core';

const dark = useDark();
</script>
