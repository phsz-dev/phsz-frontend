import { defineStore } from 'pinia'
import RoleResponsibility from '../types/RoleResponsibility'
import RoleLearnProcedure from '../types/RoleLearnProcedure'

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
  const processProcedure:RoleLearnProcedure[] = [
    {
      id:0,
      process_id:0,
      rank:1,
      name:'静脉注射提前准备工作',
      content:`
        <div>
          <h1>静脉注射提前准备工作</h1>
          <p>1.取出静脉注射器具，包括静脉注射针、静脉注射管、注射器、消毒棉球、手套、透明胶带、止血带、注射液等。</p>
          <p>2.检查静脉注射器具是否完整，是否过期。</p>
          <p>3.将静脉注射器具放在干净、整洁的工作台上。</p>
          <p>4.洗手，戴手套。</p>
        </div>
      `
    },
    {
      id:1,
      process_id:0,
      rank:2,
      name:'静脉注射操作步骤',
      content:`
        <div>
          <p>1.将宠物放在固定位置，保持宠物安静。</p>
          <p>2.用消毒棉球擦拭注射部位。</p>
          <p>3.戴手套，取出静脉注射器具。</p>
          <p>4.将注射器中的注射液抽入，排除空气。</p>
          <p>5.用止血带扎住宠物的前肢，使静脉突出。</p>
          <p>6.用消毒棉球擦拭静脉突出部位。</p>
          <p>7.用一只手拉住静脉突出部位，另一只手拿着静脉注射器具，将静脉注射针插入静脉突出部位。</p>
          <p>8.将静脉注射器具的注射管连接到静脉注射针上。</p>
          <p>9.将注射液缓慢注入静脉管内。</p>
          <p>10.注射完毕后，将静脉注射器具取出，用透明胶带固定静脉注射针。</p>
          <p>11.用消毒棉球擦拭注射部位，拆除止血带。</p>
          <p>12.将宠物放在固定位置，观察宠物的反应。</p>
        </div>
      `
    },
    {
      id:2,
      process_id:0,
      rank:3,
      name:'静脉注射后处理工作',
      content:`
        <div>
          <p>1.将静脉注射器具清洗干净，消毒。</p>
          <p>2.将静脉注射器具放在干净、整洁的工作台上。</p>
          <p>3.洗手，脱手套。</p>
          <p>4.记录静脉注射的时间、药物、剂量。</p>
        </div>
      `
    }
  ]
  return {
    roleResponsibility,
    processProcedure
  }
})
