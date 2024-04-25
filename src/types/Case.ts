import CaseDisease from './CaseDisease'
import CaseAssay from './CaseAssay'
import CaseMedicine from './CaseMedicine'
import CaseVaccine from './CaseVaccine'
import Charge from './Charge'

export default interface Case {
  id: number
  name: string
  diseaseList: CaseDisease
  description: string
  submitTime: number
  assays: CaseAssay[]
  medicines: CaseMedicine[]
  vaccines: CaseVaccine[]
  charge: Charge
  brief: string
  doctorName: string
}
