<template>
  <div class="mx-auto h-full max-w-5xl">
    <PHCaseDetail :case_info="case_info" />
  </div>
</template>

<script setup lang="ts">
import PHCaseDetail from '../components/PHCaseDetail.vue'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
const case_id = parseInt(useRoute().params.id as string)
const case_info = reactive({
  id: case_id,
  name: '12岁小狗的犬瘟热',
  caseDescription:
    '<p>12岁小狗的犬瘟热描述</p><p>12岁小狗的犬瘟热描述</p><p>12岁小狗的犬瘟热描述</p>',
  diseaseList: [
    {
      id: 0,
      name: '犬瘟热',
      description: '犬瘟热描述',
      kindId: 0
    },
    {
      id: 1,
      name: '犬细小病毒',
      description: '犬细小病毒描述',
      kindId: 2
    }
  ],
  submitTime: 1711952152437,
  assays: [
    {
      id: 0,
      name: '犬瘟热检测',
      result: '阳性'
    },
    {
      id: 1,
      assayName: '犬细小病毒检测',
      result: '阴性'
    }
  ],
  medicines: [
    {
      medicineId: 0,
      medicineName: '犬瘟热药物',
      type: '犬瘟热药物描述',
      batchNumber: '2021-12-12',
      validity: 1711952152437,
      usage: '口服',
      price: 100
    },
    {
      medicineId: 1,
      medicineName: '犬细小病毒药物',
      type: '犬细小病毒药物描述',
      batchNumber: '2021-12-12',
      validity: 1711952152437,
      usage: '口服',
      price: 100
    }
  ],
  vaccines: [
    {
      vaccineId: 0,
      name: '犬瘟热疫苗',
      manufacturer: '犬瘟热疫苗生产商',
      expiryDate: 1711952152437
    },
    {
      vaccineId: 1,
      name: '犬细小病毒疫苗',
      manufacturer: '犬细小病毒疫苗生产商',
      expiryDate: 1711952152437
    }
  ],
  charge: {
    total: 1000,
    items: [
      {
        name: '犬瘟热检测',
        num: 1,
        price: 100
      },
      {
        name: '犬瘟热药物',
        num: 1,
        price: 100
      },
      {
        name: '犬瘟热疫苗',
        num: 1,
        price: 100
      },
      {
        name: '犬细小病毒检测',
        num: 1,
        price: 100
      },
      {
        name: '犬细小病毒药物',
        num: 1,
        price: 100
      },
      {
        name: '犬细小病毒疫苗',
        num: 1,
        price: 100
      }
    ]
  }
})
</script>
