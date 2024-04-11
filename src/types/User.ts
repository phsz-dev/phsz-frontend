export default interface User {
  id: number
  username: string
  password: string
  email: string
  roles: string[]
  enabled: boolean
}

export interface UserInfo {
  id: number
  username: string
  email: string
  roles: string[]
  enabled: boolean
}
