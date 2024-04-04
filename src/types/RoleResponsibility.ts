import RoleSubResponsibility from './RoleSubResponsibility'

export default interface RoleResponsibility {
  id:number
  name: string
  subResponsibilities: RoleSubResponsibility[]
}
