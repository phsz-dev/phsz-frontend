import { defineStore } from 'pinia'
import { ref } from 'vue'
import ApiService from '../http'
import Case from '../types/Case'
import Page from '../types/Page'
import RoughCase from '../types/RoughCase'
import CaseAssay from '../types/CaseAssay'
import { useAssayStore } from './assay'
import Assay from '../types/assay'
import { useMedicineStore } from './medicine'
import CaseMedicine from '../types/CaseMedicine'
import { useVaccineStore } from './vaccine'
import CaseVaccine from '../types/CaseVaccine'
import Vaccine from '../types/vaccine'

const apiService = new ApiService('')

export const useCaseStore = defineStore('case', () => {
  const diseaseCatalog = ref<any[]>([])
  const roughCases = ref<Page<RoughCase>>()
  const detailedCase = ref<Case>()
  const currentIndex = ref<number>(0)
  const chargeList = ref<any>([])
  const getDiseaseCatalog = async () => {
    try {
      const res = await apiService.get('/api/diseases')
      diseaseCatalog.value = res
    } catch (e) {
      console.log(e)
    }
  }
  const getRoughCaseByDisease = async (
    diseaseId: number,
    pageNum: number,
    pageSize: number
  ) => {
    try {
      const res = await apiService.get(
        '/api/cases/disease?diseaseId=' +
          diseaseId +
          '&pageSize=' +
          pageSize +
          '&pageNum=' +
          pageNum
      )
      console.log(res)
      roughCases.value = res
    } catch (e) {
      console.log(e)
    }
  }
  const getDetailedCase = async (caseId: number) => {
    try {
      const res = await apiService.get('/api/cases/' + caseId)
      console.log(res)
      if (res.chargeId != null) {
        const res2 = await apiService.get('/api/charges/' + res.chargeId)
        chargeList.value = res2
        console.log(res2)
      }
      detailedCase.value = res
    } catch (e) {
      console.log(e)
    }
  }

  const deleteCaseMedicineLocal = async (index: number) => {
    detailedCase.value!.medicines.splice(index, 1)
  }

  const addCaseMedicineLocal = async (caseMedicine: CaseMedicine) => {
    const medicine = await useMedicineStore().getMedicineById(caseMedicine.id)
    if (detailedCase.value) {
      caseMedicine.name = medicine.name
      caseMedicine.usage = medicine.usage
      detailedCase.value.medicines.push({ ...caseMedicine })
    }
  }

  const deleteCaseVaccineLocal = async (index: number) => {
    detailedCase.value!.vaccines.splice(index, 1)
  }

  const addCaseVaccineLocal = async (caseVaccine: CaseVaccine) => {
    const vaccine : Vaccine = await useVaccineStore().getVaccineById(caseVaccine.id)
    if (detailedCase.value) {
      caseVaccine.name = vaccine.name
      caseVaccine.manufacturer = vaccine.manufacturer
      detailedCase.value.vaccines.push({ ...caseVaccine })
    }
  }

  const deleteCaseAssayLocal = async (index: number) => {
    detailedCase.value!.assays.splice(index, 1)
  }

  const addCaseAssayLocal = async (caseAssay: CaseAssay) => {
    const assay : Assay = await useAssayStore().getAssayById(caseAssay.id)
    if (detailedCase.value) {
      caseAssay.name = assay.name
      detailedCase.value.assays.push({ ...caseAssay })
    }
  }

  const createCase = async () => {
    try {
      const res = await apiService.post('/api/cases', {
        diseaseList: [],
        assays: [],
        medicines: [],
        vaccines: [],
        description: '<p></p>'
      })
      console.log(res)
      return res
    } catch (e) {
      console.log(e)
    }
  }

  const updateCase = async (caseInfo: Case) => {
    try {
      const res = await apiService.put('/api/cases', caseInfo)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  
  const collectCase = async (caseId: number) => {
    try {
      const res = await apiService.get('/api/cases/collect/' + caseId, localStorage.getItem('token') ?? undefined)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  return {
    diseaseCatalog,
    roughCases,
    detailedCase,
    currentIndex,
    chargeList,
    getDiseaseCatalog,
    getRoughCaseByDisease,
    getDetailedCase,
    deleteCaseMedicineLocal,
    addCaseMedicineLocal,
    deleteCaseVaccineLocal,
    addCaseVaccineLocal,
    deleteCaseAssayLocal,
    addCaseAssayLocal,
    createCase,
    updateCase,
    collectCase
  }
})
