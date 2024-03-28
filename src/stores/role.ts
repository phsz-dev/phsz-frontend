import { defineStore } from 'pinia'

export const useRoleStore = defineStore('role', () => {
  const roleResponsibility = [
    {
      respon_name: '注射工作',
      respon_content: [
        {
          process_name: '静脉注射',
          process_content:
            '静脉注射是将药物注射到静脉内，以便药物迅速进入血液循环，起到快速、强效的治疗作用。'
        },
        {
          process_name: '肌肉注射',
          process_content:
            '肌肉注射是将药物注射到肌肉内，以便药物迅速进入血液循环，起到快速、强效的治疗作用。'
        },
        {
          process_name: '皮下注射',
          process_content:
            '皮下注射是将药物注射到皮下组织，以便药物迅速进入血液循环，起到快速、强效的治疗作用。'
        },
        {
          process_name: '局部封闭注射',
          process_content:
            '局部封闭注射是将药物注射到局部组织，以便药物迅速进入血液循环，起到快速、强效的治疗作用。'
        }
      ]
    },
    {
      respon_name: '手术前准备工作',
      respon_content: [
        {
          process_name: '术前对宠物进行麻前给药、注射麻醉、吸入麻醉的流程',
          process_content:
            '术前对宠物进行麻前给药、注射麻醉、吸入麻醉的流程是指在手术前对宠物进行麻前给药、注射麻醉、吸入麻醉，为手术的顺利进行提供保障。'
        },
        {
          process_name: '保定',
          process_content:
            '保定是指在手术过程中对宠物进行保定，以便手术的顺利进行。'
        },
        {
          process_name: '剃毛',
          process_content:
            '剃毛是指在手术前对宠物进行剃毛，以便手术的顺利进行。'
        },
        {
          process_name: '消毒',
          process_content:
            '消毒是指在手术前对宠物进行消毒，以便手术的顺利进行。'
        }
      ]
    }
  ]
})
