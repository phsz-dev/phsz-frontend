import { defineStore } from 'pinia'
import RoleResponsibility from '../types/RoleResponsibility'

export const useRoleStore = defineStore('role', () => {
  const roleResponsibility:RoleResponsibility[] = [
    {
      name: '注射工作',
      content: [
        {
          id: 0,
          name: '静脉注射'
        },
        {
          id: 1,
          name: '肌肉注射'
        },
        {
          id: 2,
          name: '皮下注射'
        },
        {
          id: 3,
          name: '局部封闭注射'
        }
      ]
    },
    {
      name: '手术前准备工作',
      content: [
        {
          id: 4,
          name: '术前对宠物进行麻前给药、注射麻醉、吸入麻醉的流程'
        },
        {
          id: 5,
          name: '保定'
        },
        {
          id: 6,
          name: '剃毛'
        },
        {
          id: 7,
          name: '消毒'
        }
      ]
    }
  ]
  return {
    roleResponsibility
  }
})
