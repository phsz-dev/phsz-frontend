<template>
  <div>
    <div>{{ case_info?.name }}</div>
    <div>{{case_info?.submitTime?new Date(case_info?.submitTime).toLocaleString():new Date().toLocaleString() }}</div>
    <div>{{case_info?.brief}}</div>
    <div>
      <div>
        <PHChoiceList :choices="choices" />
      </div>
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Case from '../types/Case';
import {ref} from 'vue'

defineProps<{
  case_info?: Case
}>()

const choices = ref(['基本介绍','处方药品','处方疫苗','检查项目','收费详情'])

</script>
