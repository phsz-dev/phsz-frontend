import CaseDisease from './CaseDisease'
import CaseAssay from './CaseAssay'
import CaseMedicine from './CaseMedicine'
import CaseVaccine from './CaseVaccine'

export default interface Case {
  id: number
  name: string
  diseaseList: CaseDisease[]
  description: string
  submitTime: number
  assays: CaseAssay[]
  medicines: CaseMedicine[]
  vaccines: CaseVaccine[]
  chargeId: number
  brief: string
  doctorName: string
}
