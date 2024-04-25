<template>
  <div
    class="relative mx-auto h-full w-full overflow-y-scroll rounded-xl bg-white px-8 py-2 shadow-md md:max-w-5xl dark:bg-dark-block-500"
    v-if="store.detailedCase"
  >
    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">ID</div>
      <div class="py-2 text-lg dark:text-gray-200">
        {{ store.detailedCase?.id }}
      </div>
    </div>
    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">病例名称</div>
      <input
        type="text"
        class="rounded-base ml-20 flex-1 rounded-md border border-gray-300 px-4 py-2 text-lg dark:bg-dark-block-400 dark:text-gray-200"
        v-model="store.detailedCase.name"
      />
    </div>
    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">对应疾病</div>
      <input
        type="text"
        class="rounded-base ml-20 flex-1 rounded-md border border-gray-300 px-4 py-2 text-lg dark:bg-dark-block-400 dark:text-gray-200"
        v-model="store.detailedCase.name"
      />
    </div>
    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">提交时间</div>
      <div class="py-2 text-lg dark:text-gray-200">
        {{
          store.detailedCase.submitTime
            ? new Date(store.detailedCase?.submitTime).toLocaleString()
            : new Date().toLocaleString()
        }}
      </div>
    </div>
    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">病例简介</div>
      <textarea
        class="rounded-base ml-20 flex-1 rounded-md border border-gray-300 px-4 py-2 text-lg dark:bg-dark-block-400 dark:text-gray-200"
        v-model="store.detailedCase.brief"
      ></textarea>
    </div>
    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">病例描述</div>
      <div class="ml-20 flex-1">
        <PHQuill v-model="store.detailedCase.description" />
      </div>
    </div>

    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">处方药品</div>
      <div class="ml-20 flex-1 rounded-md">
        <div
          class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%]">用法</div>
          <div class="flex-1 text-center">药量</div>
          <div class="flex-[2_2_0%]">开药日期</div>
          <div class="flex-[0.5_0.5_0%]">操作</div>
        </div>
        <!-- 内容 -->
        <div
          v-for="(item, index) in store.detailedCase?.medicines"
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
              >{{ item.name }}</RouterLink
            >
            <div class="flex-[2_2_0%]">{{ item.usage }}</div>
            <div class="flex-1 text-center">{{ item.medicineDosage }}</div>
            <div class="flex-[2_2_0%]">
              {{ new Date(item.validity).toLocaleDateString() }}
            </div>
            <div class="flex-[0.5_0.5_0%]">
              <button
                class="rounded-md bg-red-500 px-2 py-1 text-sm text-white"
                @click="store.deleteCaseMedicineLocal(index)"
              >
                删除
              </button>
            </div>
          </div>
        </div>
        <!-- 添加输入 -->
        <div
          class="flex w-full flex-row px-2 py-3 text-base text-black dark:!text-gray-200"
          :class="
            store.detailedCase?.medicines.length % 2 === 0
              ? 'bg-secondary-50 dark:bg-gray-800'
              : 'bg-secondary-100/60 dark:bg-gray-700'
          "
        >
          <select
            class="flex-[4_4_0%] border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200"
            v-model="newMedicine.id"
          >
            <option
              v-for="medicine in medicineStore.allMedicines"
              :key="medicine.id"
              :value="medicine.id"
            >
              {{ (medicine.name + ' ' + medicine.usage).substring(0, 20) }}
            </option>
          </select>
          
          <!-- 文本输入框用于输入测试结果（阳性或阴性） -->
          <select
            class="flex-[1_1_0%] border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200"
            v-model="newMedicine.medicineDosage"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            type="date"
            class="flex-[2_2_0%] border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200"
            v-model="newMedicine.validity"
          />
          <div class="flex-[0.5_0.5_0%]">
            <button
              class="rounded-md bg-primary-500 px-2 py-1 text-sm text-white"
              @click="store.addCaseMedicineLocal(newMedicine)"
            >
              添加
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">处方疫苗</div>
      <div class="ml-20 flex-1 rounded-md">
        <div
          class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-1">名称</div>
          <div class="flex-1">生产厂商</div>
          <div class="flex-1">有效期</div>
          <div class="flex-[0.25_0.25_0%]">操作</div>
        </div>
        <!-- 内容 -->
        <div
          v-for="(item, index) in store.detailedCase?.vaccines"
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
            <div class="flex-1">{{ item.manufacturer }}</div>
            <div class="flex-1">
              {{ new Date(item.expiryDate).toLocaleDateString() }}
            </div>
            <div class="flex-[0.25_0.25_0%]">
              <button
                class="rounded-md bg-red-500 px-2 py-1 text-sm text-white"
                @click="store.deleteCaseVaccineLocal(index)"
              >
                删除
              </button>
            </div>
          </div>
        </div>
        <!-- 添加输入 -->
        <div
          class="flex w-full flex-row px-2 py-3 text-base text-black dark:!text-gray-200"
          :class="
            store.detailedCase?.vaccines.length % 2 === 0
              ? 'bg-secondary-50 dark:bg-gray-800'
              : 'bg-secondary-100/60 dark:bg-gray-700'
          "
        >
          <select
            class="flex-[4_4_0%] border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200"
            v-model="newVaccine.id"
          >
            <option
              v-for="vaccine in vaccineStore.allVaccines"
              :key="vaccine.id"
              :value="vaccine.id"
            >
              {{ (vaccine.name + ' ' + vaccine.manufacturer).substring(0, 20) }}
            </option>
          </select>
          <input
            type="date"
            class="flex-[2_2_0%] border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200"
            v-model="newVaccine.expiryDate"
          />
          <div class="flex-[0.5_0.5_0%]">
            <button
              class="rounded-md bg-primary-500 px-2 py-1 text-sm text-white"
              @click="store.addCaseVaccineLocal(newVaccine)"
            >
              添加
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">检查项目</div>
      <div class="ml-20 flex-1 rounded-md">
        <div
          class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%]">检查结果</div>
          <div class="flex-[2_2_0%]">开药日期</div>
          <div class="flex-[0.5_0.5_0%]">操作</div>
        </div>
        <!-- 内容 -->
        <div
          v-for="(item, index) in store.detailedCase?.assays"
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
              >{{ item.name }}</RouterLink
            >
            <div class="flex-[2_2_0%]">{{ item.result }}</div>
            <div class="flex-[2_2_0%]">
              {{ new Date(item.date).toLocaleDateString() }}
            </div>
            <div class="flex-[0.5_0.5_0%]">
              <button
                class="rounded-md bg-red-500 px-2 py-1 text-sm text-white"
                @click="store.deleteCaseAssayLocal(index)"
              >
                删除
              </button>
            </div>
          </div>
        </div>
        <!-- 添加输入 -->
        <div
          class="flex w-full flex-row px-2 py-3 text-base text-black dark:!text-gray-200"
          :class="
            store.detailedCase?.assays.length % 2 === 0
              ? 'bg-secondary-50 dark:bg-gray-800'
              : 'bg-secondary-100/60 dark:bg-gray-700'
          "
        >
          <select
            class="flex-[2_2_0%] border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200"
            v-model="newAssay.id"
          >
            <option
              v-for="assay in assayStore.allAssays"
              :key="assay.id"
              :value="assay.id"
            >
              {{ assay.name }}
            </option>
          </select>

          <!-- 文本输入框用于输入测试结果（阳性或阴性） -->
          <input type="text" placeholder="请输入检查结果" class="flex-[2_2_0%] px-2 border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200" v-model="newAssay.result" />
          <input
            type="date"
            class="flex-[2_2_0%] border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200"
            v-model="newAssay.date"
          />
          <div class="flex-[0.5_0.5_0%]">
            <button
              class="rounded-md bg-primary-500 px-2 py-1 text-sm text-white"
              @click="store.addCaseAssayLocal(newAssay)"
            >
              添加
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full justify-between py-4">
      <div class="w-30 py-2 text-lg dark:text-gray-200">额外付款</div>
      <div class="ml-20 flex-1 rounded-md">
        <div
          class="flex w-full flex-row bg-secondary-100/60 px-2 py-3 text-base font-bold text-black dark:bg-gray-700 dark:!text-gray-200"
        >
          <div class="flex-[2_2_0%]">名称</div>
          <div class="flex-[2_2_0%]">具体描述</div>
          <div class="flex-[1_1_0%]">金额</div>
          <div class="flex-[0.5_0.5_0%]">操作</div>
        </div>
        <!-- 内容 -->
        <div
          v-for="(item, index) in store.detailedCase?.charge?.details.arr as ChargeLineItem[]"
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
            <div
              class="flex-[2_2_0%] hover:cursor-pointer hover:text-primary-500"
              >{{ item.name }}</div
            >
            <div class="flex-[2_2_0%]">{{ item.description }}</div>
            <div class="flex-[1_1_0%]">
              {{ item.price }}
            </div>
            <div class="flex-[0.5_0.5_0%]">
              <button
                class="rounded-md bg-red-500 px-2 py-1 text-sm text-white"
                @click="store.deleteCaseChargeLocal(index)"
              >
                删除
              </button>
            </div>
          </div>
        </div>
        <!-- 添加输入 -->
        <div
          class="flex w-full flex-row px-2 py-3 text-base text-black dark:!text-gray-200"
          :class="
            store.detailedCase?.assays.length % 2 === 0
              ? 'bg-secondary-50 dark:bg-gray-800'
              : 'bg-secondary-100/60 dark:bg-gray-700'
          "
        >
        <input type="text" placeholder="请输入收费名称" class="flex-[2_2_0%] px-2 border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200" v-model="newCharge.name" />

          <!-- 文本输入框用于输入测试结果（阳性或阴性） -->
          <input type="text" placeholder="请输入具体描述" class="flex-[2_2_0%] px-2 border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200" v-model="newCharge.description" />
          <input
            type="number"
            class="flex-1 w-0 px-2 border border-gray-300 text-lg dark:bg-dark-block-400 dark:text-gray-200"
            v-model="newCharge.price"
          />
          <div class="flex-[0.5_0.5_0%]">
            <button
              class="rounded-md bg-primary-500 px-2 py-1 text-sm text-white"
              @click="{
                store.addCaseChargeLocal(newCharge);
                newCharge.name = '';
                newCharge.description = '';
                newCharge.price = 0;
              }"
            >
              添加
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex w-full justify-center py-4">
      <button
        class="rounded-md bg-primary-500 px-4 py-2 text-lg text-white"
        @click="saveCase"
      >
        保存
      </button>
    </div>
  </div>
  <div v-else class="h-full w-full">
    <PHLoadingIcon />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useCaseStore } from '../stores/case'
import PHLoadingIcon from './PHLoadingIcon.vue'
import PHQuill from './PHQuill.vue'
import { useAssayStore } from '../stores/assay'
import { useMedicineStore } from '../stores/medicine'
import { useVaccineStore } from '../stores/vaccine'
import { useMessageStore } from '../stores/message'
import ChargeLineItem from '../types/ChargeLineItem'
import Message from '../types/message'
import router from '../router'
const messageStore = useMessageStore()
const store = useCaseStore()
const medicineStore = useMedicineStore()
const vaccineStore = useVaccineStore()
const assayStore = useAssayStore()
const props = defineProps<{
  case_id: number
}>()

onMounted(async () => {
  try {
    console.log(store)
    await store.getDetailedCase(props.case_id)
  } catch (e) {
    console.log(e)
  }
})

const newMedicine = reactive({
  id: 0,
  name: '',
  usage: '',
  medicineDosage: '',
  validity: '',
  price:0
})

const newVaccine = reactive({
  id: 0,
  name: '',
  manufacturer: '',
  expiryDate: '',
  price:0
})

const newAssay = reactive({
  id: 0,
  name: '',
  result: '',
  date: '',
  price:0
})

const newCharge = reactive({
  name: '',
  description: '',
  price: 0
})

const saveCase = async () =>{
  await store.updateCase(store.detailedCase!)
  messageStore.addMessage(Message.partialMessage('保存成功', 'success','top'))
  router.go(-1)
}
</script>
