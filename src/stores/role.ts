import { defineStore } from 'pinia'
import RoleResponsibility from '../types/RoleResponsibility'

export const useRoleStore = defineStore('role', () => {
  const roleResponsibility: RoleResponsibility[] = [
    {
      name: '接待与咨询服务',
      content: [
        {
          id: 0,
          name: '接待顾客',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '准备接待区域',
              content: '<p>确保环境整洁舒适。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '接待到访的顾客',
              content: '<p>提供座位和等候服务。</p>'
            },
            {
              id: 2,
              rank: 3,
              name: '解答顾客咨询',
              content: '<p>包括服务内容、费用、等待时间等。</p>'
            },
            {
              id: 3,
              rank: 4,
              name: '指引顾客',
              content: '<p>填写宠物的基本信息和看诊需求。</p>'
            }
          ]
        },
        {
          id: 1,
          name: '管理预约',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '接收预约',
              content: '<p>接收电话或在线预约，并记录在预约系统中。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '安排预约时间',
              content: '<p>根据医生的时间表，安排顾客预约时间。</p>'
            },
            {
              id: 2,
              rank: 3,
              name: '预约提醒',
              content: '<p>提前一天通过电话或短信提醒顾客预约时间。</p>'
            },
            {
              id: 3,
              rank: 4,
              name: '确认预约信息',
              content: '<p>接待时确认顾客的预约信息，并引导至候诊区。</p>'
            }
          ]
        }
      ]
    },
    {
      name: '资料管理与档案建立',
      content: [
        {
          id: 0,
          name: '建立宠物档案',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '收集信息',
              content: '<p>收集宠物的基本信息和医疗历史。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '建立电子档案',
              content: '<p>在系统中建立宠物的电子档案。</p>'
            },
            {
              id: 2,
              rank: 3,
              name: '更新诊疗记录',
              content: '<p>更新宠物的诊疗记录和疫苗接种信息。</p>'
            },
            {
              id: 3,
              rank: 4,
              name: '定期检查档案',
              content: '<p>定期检查档案信息的完整性和准确性。</p>'
            }
          ]
        }
      ]
    },
    {
      name: '准备和清理诊室',
      content: [
        {
          id: 0,
          name: '准备诊室',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '清洁和消毒',
              content: '<p>确保诊室内仪器设备的清洁和消毒。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '准备医疗工具和药品',
              content: '<p>准备当日需要使用的医疗工具和药品。</p>'
            },
            {
              id: 2,
              rank: 3,
              name: '检查设备运行',
              content: '<p>检查诊室内的设备是否运行正常。</p>'
            }
          ]
        },
        {
          id: 1,
          name: '清理诊室',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '清洁和消毒工具',
              content: '<p>诊疗结束后，对使用过的工具进行清洁和消毒。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '整理诊室',
              content: '<p>整理诊室，确保环境整洁，准备好迎接下一位顾客。</p>'
            },
            {
              id: 2,
              rank: 3,
              name: '补充物资',
              content: '<p>检查并补充诊室内消耗的物资。</p>'
            }
          ]
        }
      ]
    },
    {
      name: '注射工作',
      content: [
        {
          id: 0,
          name: '静脉注射',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '静脉注射提前准备工作',
              content:
                '<p>取出静脉注射器具，包括静脉注射针、静脉注射管、注射器、消毒棉球、手套、透明胶带、止血带、注射液等。检查静脉注射器具是否完整，是否过期。将静脉注射器具放在干净、整洁的工作台上。洗手，戴手套。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '执行静脉注射',
              content:
                '<p>消毒注射部位，准确找到静脉位置，缓慢注入药物，观察宠物反应。</p>'
            },
            {
              id: 2,
              rank: 3,
              name: '注射后处理',
              content:
                '<p>取出针头，用消毒棉球轻压注射部位，防止出血。处理注射器具，记录注射信息。</p>'
            }
          ]
        },
        {
          id: 1,
          name: '肌肉注射',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '肌肉注射提前准备工作',
              content:
                '<p>准备注射器具，检查药物有效期和完整性，进行消毒准备。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '执行肌肉注射',
              content: '<p>选择适当的肌肉部位，进行消毒，按正确方法注射。</p>'
            },
            {
              id: 2,
              rank: 3,
              name: '注射后处理',
              content: '<p>处理注射部位，确保无出血，记录注射信息。</p>'
            }
          ]
        }
      ]
    },
    {
      name: '诊断与治疗',
      content: [
        {
          id: 0,
          name: '宠物健康检查',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '体检',
              content: '<p>对宠物进行全面的体检，包括听诊、触诊等。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '检测项目',
              content: '<p>根据需要，安排血液测试、X光检查等。</p>'
            },
            {
              id: 2,
              rank: 3,
              name: '诊断结果',
              content: '<p>分析检查结果，诊断宠物的健康状况。</p>'
            }
          ]
        },
        {
          id: 1,
          name: '制定治疗方案',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '讨论治疗方案',
              content: '<p>根据诊断结果，与宠物主人讨论治疗方案。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '药物处方',
              content: '<p>开具药物处方，解释用药方法和注意事项。</p>'
            },
            {
              id: 2,
              rank: 3,
              name: '后续治疗',
              content: '<p>安排必要的后续治疗，如手术、特殊治疗等。</p>'
            }
          ]
        }
      ]
    },
    {
      name: '健康咨询与预防',
      content: [
        {
          id: 0,
          name: '提供营养建议',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '营养咨询',
              content: '<p>根据宠物的年龄、健康状况提供饮食建议。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '推荐食品',
              content: '<p>推荐适合宠物的食品和补充品。</p>'
            }
          ]
        },
        {
          id: 1,
          name: '疫苗接种和定期体检',
          processProcedure: [
            {
              id: 0,
              rank: 1,
              name: '疫苗接种计划',
              content: '<p>根据宠物的种类和年龄安排疫苗接种计划。</p>'
            },
            {
              id: 1,
              rank: 2,
              name: '定期体检提醒',
              content: '<p>提醒宠物主人进行定期体检，预防疾病。</p>'
            }
          ]
        }
      ]
    }
  ]
  return {
    roleResponsibility
  }
})
