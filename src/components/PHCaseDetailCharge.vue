<template>
  <div class="p-2">
    <div v-if="store.chargeList.details">
      <div
        v-if="
          store.chargeList.details.assays &&
          store.chargeList.details.assays.length > 0
        "
      >
        <div class="py-2 text-lg font-bold text-black dark:!text-gray-200">
          检查收费
        </div>
        <div
          class="flex w-full flex-row bg-gray-200 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%]">价格</div>
        </div>
        <div
          v-for="(item, index) in store.chargeList.details.assays"
          :key="index"
          class="px-2 py-3"
          :class="
            index % 2 === 0
              ? 'bg-gray-100 dark:bg-gray-800'
              : 'bg-gray-200 dark:bg-gray-700'
          "
        >
          <div
            class="flex w-full flex-row text-base text-black dark:!text-gray-200"
          >
            <div class="flex-[2_2_0%]">{{ item.name }}</div>
            <div class="flex-[2_2_0%]">{{ item.price }}元</div>
          </div>
        </div>
      </div>
      <div
        v-if="
          store.chargeList.details.medicines &&
          store.chargeList.details.medicines.length > 0
        "
        class="mt-5"
      >
        <div class="py-2 text-lg font-bold text-black dark:!text-gray-200">
          药品收费
        </div>
        <div
          class="flex w-full flex-row bg-gray-200 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%]">数量</div>
          <div class="flex-[2_2_0%]">总计</div>
        </div>
        <div
          v-for="(item, index) in store.chargeList.details
            .medicines"
          :key="index"
          class="px-2 py-3"
          :class="
            index % 2 === 0
              ? 'bg-gray-100 dark:bg-gray-800'
              : 'bg-gray-200 dark:bg-gray-700'
          "
        >
          <div
            class="flex w-full flex-row text-base text-black dark:!text-gray-200"
          >
            <div class="flex-[2_2_0%]">{{ item.name }}</div>
            <div class="flex-[2_2_0%]">{{ item.dosage }}</div>
            <div class="flex-[2_2_0%]">{{ item.price }}元</div>
          </div>
        </div>
      </div>
      <div
        v-if="
          store.chargeList.details.vaccines &&
          store.chargeList.details.vaccines.length > 0
        "
        class="mt-5"
      >
        <div class="py-2 text-lg font-bold text-black dark:!text-gray-200">
          疫苗收费
        </div>
        <div
          class="flex w-full flex-row bg-gray-200 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%]">价格</div>
        </div>
        <div
          v-for="(item, index) in store.chargeList.details.vaccines"
          :key="index"
          class="px-2 py-3"
          :class="
            index % 2 === 0
              ? 'bg-gray-100 dark:bg-gray-800'
              : 'bg-gray-200 dark:bg-gray-700'
          "
        >
          <div
            class="flex w-full flex-row text-base text-black dark:!text-gray-200"
          >
            <div class="flex-[2_2_0%]">{{ item.name }}</div>
            <div class="flex-[2_2_0%]">{{ item.price }}元</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-base font-bold text-black dark:!text-gray-200">
        无收费信息
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCaseStore } from '../stores/case'
const store = useCaseStore()
</script>
