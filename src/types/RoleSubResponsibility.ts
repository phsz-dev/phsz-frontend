import RoleLearnProcedure from './RoleLearnProcedure'
export default interface Process {
  id: number
  name: string
  procedures: RoleLearnProcedure[]
}
