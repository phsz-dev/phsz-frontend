import Process from './Process'

export default class RoleResponsibility {
  name: string
  content: Process[]

  constructor(name: string, content: Process[]) {
    this.name = name
    this.content = content
  }
}
