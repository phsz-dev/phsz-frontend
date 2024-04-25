<template>
  <div class="p-2">
    <div>
      <div  v-if="store.detailedCase?.medicines && store.detailedCase.medicines.length > 0">
        <div class="py-2 text-lg font-bold text-black dark:!text-gray-200">
          检查收费
        </div>
        <div
          class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%]">价格</div>
        </div>
        <div
          v-for="(item, index) in store.detailedCase.assays"
          :key="index"
          class="px-2 py-3"
          :class="
            index % 2 === 0
              ? 'bg-secondary-50 dark:bg-gray-800'
              : 'bg-secondary-100/60 dark:bg-gray-700'
          "
        >
          <div
            class="flex w-full flex-row text-base text-black dark:!text-gray-200"
          >
            <RouterLink
              class="flex-[2_2_0%] hover:cursor-pointer hover:text-primary-500"
              :to="{ path: `/assay/${item.id}` }"
              v-if="item.name!='检查不存在'"
              >{{ item.name }}</RouterLink
            >
            <div
              class="flex-[2_2_0%] hover:cursor-pointer hover:text-primary-500"
              v-else
              >{{ item.name }}</div
            >
            <div class="flex-[2_2_0%]">{{ item.price?item.price+"元":"/" }}</div>
          </div>
        </div>
      </div>
      <div
        v-if="
          store.detailedCase?.medicines && store.detailedCase.medicines.length > 0
        "
        class="mt-5"
      >
        <div class="py-2 text-lg font-bold text-black dark:!text-gray-200">
          药品收费
        </div>
        <div
          class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%] text-center">数量</div>
          <div class="flex-[2_2_0%] text-center">总计</div>
        </div>
        <div
          v-for="(item, index) in store.detailedCase.medicines"
          :key="index"
          class="px-2 py-3"
          :class="
            index % 2 === 0
              ? 'bg-secondary-50 dark:bg-gray-800'
              : 'bg-secondary-100/60 dark:bg-gray-700'
          "
        >
          <div
            class="flex w-full flex-row text-base text-black dark:!text-gray-200"
          >
            <RouterLink
              :to="{ path: `/medicine/${item.id}` }"
              class="flex-[2_2_0%] hover:cursor-pointer hover:text-primary-500"
              v-if="item.name!='药品不存在'"
              >{{ item.name }}</RouterLink
            >
            <div class="flex-[2_2_0%] hover:cursor-pointer hover:text-primary-500" v-else>
              {{ item.name }}
            </div>
            <div class="flex-[2_2_0%] text-center">{{ item.medicineDosage?item.medicineDosage:"/" }}</div>
            <div class="flex-[2_2_0%] text-center">{{ item.price?item.price*parseInt(item.medicineDosage)+"元":"/" }}</div>
          </div>
        </div>
      </div>
      <div
        v-if="
          store.detailedCase?.vaccines && store.detailedCase.vaccines.length > 0
        "
        class="mt-5"
      >
        <div class="py-2 text-lg font-bold text-black dark:!text-gray-200">
          疫苗收费
        </div>
        <div
          class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%]">价格</div>
        </div>
        <div
          v-for="(item, index) in store.detailedCase.vaccines"
          :key="index"
          class="px-2 py-3"
          :class="
            index % 2 === 0
              ? 'bg-secondary-50 dark:bg-gray-800'
              : 'bg-secondary-100/60 dark:bg-gray-700'
          "
        >
          <div
            class="flex w-full flex-row text-base text-black dark:!text-gray-200"
          >
            <RouterLink
              class="flex-1 hover:cursor-pointer hover:text-primary-500"
              :to="{ path: `/vaccine/${item.id}` }"
              >{{ item.name }}</RouterLink
            >
            <div class="flex-1">{{ item.price?item.price+"元":"/" }}</div>
          </div>
        </div>
      </div>
      <div
        v-if="
          store.detailedCase?.charge && store.detailedCase.charge.details.arr.length > 0
        "
        class="mt-5"
      >
        <div class="py-2 text-lg font-bold text-black dark:!text-gray-200">
          其他收费
        </div>
        <div
          class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%] w-0">名称</div>
          <div class="flex-[3_3_0%] w-0">描述</div>
          <div class="flex-[1_1_0%] w-0">价格</div>
        </div>
        <div
          v-for="(item, index) in store.detailedCase.charge.details.arr"
          :key="index"
          class="px-2 py-3"
          :class="
            index % 2 === 0
              ? 'bg-secondary-50 dark:bg-gray-800'
              : 'bg-secondary-100/60 dark:bg-gray-700'
          "
        >
          <div
            class="flex w-full flex-row text-base text-black dark:!text-gray-200"
          >
            <div class="flex-[2_2_0%] w-0">{{ item.name }}</div>
            <div class="flex-[3_3_0%] w-0">{{ item.description }}</div>
            <div class="flex-1">{{ item.price+"元" }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!store.detailedCase?.medicines && !store.detailedCase?.vaccines && !store.detailedCase?.assays && !store.detailedCase?.charge" class="mt-5">
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
