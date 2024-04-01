import { defineStore } from 'pinia'

export const useCaseStore = defineStore('case', () => {
  const diseaseCatalog = [
    {
      name: '传染病',
      diseases: [
        {
          id: 0,
          name: '犬瘟热',
        },
        {
          id: 1,
          name: '犬细小病毒',
        },
        {
          id: 2,
          name: '犬传染性肝炎',
        },
        {
          id: 3,
          name: '犬冠状病毒',
        },
        {
          id: 4,
          name: '猫泛白细胞减少症',
        },
        {
          id: 5,
          name: '猫病毒性病气管炎',
        },
        {
          id: 6,
          name: '皮肤真菌感染',
        }
      ]
    },
    {
      name: '寄生虫病',
      diseases: [
        {
          id: 7,
          name: '蛔虫病',
        },
        {
          id: 8,
          name: '钩虫病',
        },
        {
          id: 9,
          name: '绦虫病',
        },
        {
          id: 10,
          name: '球虫病',
        },
        {
          id: 11,
          name: '疥螨虫病',
        },
        {
          id: 12,
          name: '蚤病',
        }
      ]
    },
    {
      name: '内科',
      diseases: [
        {
          id: 13,
          name: '口炎',
        },
        {
          id: 14,
          name: '肠炎',
        },
        {
          id: 15,
          name: '肠便秘',
        },
        {
          id: 16,
          name: '胰腺炎',
        },
        {
          id: 17,
          name: '肝炎',
        },
        {
          id: 18,
          name: '腹膜炎',
        },
        {
          id: 19,
          name: '肛门腺炎',
        },
        {
          id: 20,
          name: '感冒',
        },
        {
          id: 21,
          name: '鼻炎',
        },
        {
          id: 22,
          name: '气管支气管炎',
        },
        {
          id: 23,
          name: '肺炎',
        },
        {
          id: 24,
          name: '心力衰竭',
        },
        {
          id: 25,
          name: '尿道感染',
        },
        {
          id: 26,
          name: '尿结石',
        },
        {
          id: 27,
          name: '膀胱炎',
        },
        {
          id: 28,
          name: '肾炎',
        },
        {
          id: 29,
          name: '佝偻病',
        },
        {
          id: 30,
          name: '有机磷中毒',
        },
        {
          id: 31,
          name: '糖尿病',
        },
        {
          id: 32,
          name: '耳血肿',
        },
        {
          id: 33,
          name: '中耳炎',
        },
        {
          id: 34,
          name: '眼睑内翻',
        },
        {
          id: 35,
          name: '结膜炎',
        },
        {
          id: 36,
          name: '角膜炎',
        }
      ]
    },
    {
      name: '外产科疾病',
      diseases: [
        {
          id: 37,
          name: '外伤',
        },
        {
          id: 38,
          name: '外科感染',
        },
        {
          id: 39,
          name: '骨折',
        },
        {
          id: 40,
          name: '关节脱位',
        },
        {
          id: 41,
          name: '湿疹',
        },
        {
          id: 42,
          name: '皮炎',
        },
        {
          id: 43,
          name: '脓皮病',
        },
        {
          id: 44,
          name: '脱毛症',
        },
        {
          id: 45,
          name: '趾间囊肿',
        },
        {
          id: 46,
          name: '疝',
        },
        {
          id: 47,
          name: '阴道炎',
        },
        {
          id: 48,
          name: '阴道脱出',
        },
        {
          id: 49,
          name: '子宫蓄脓',
        },
        {
          id: 50,
          name: '难产',
        },
        {
          id: 51,
          name: '乳房炎',
        }
      ]
    },
    {
      name: '常用手术',
      diseases: [
        {
          id: 52,
          name: '绝育',
        },
        {
          id: 53,
          name: '剖腹产',
        },
        {
          id: 54,
          name: '瞬膜腺增生物切除',
        },
        {
          id: 55,
          name: '眼球摘除',
        },
        {
          id: 56,
          name: '立耳术',
        },
        {
          id: 57,
          name: '断尾术',
        }
      ]
    },
    {
      name: '免疫',
      diseases: [
        {
          id: 58,
          name: '犬免疫程序',
        },
        {
          id: 59,
          name: '猫免疫程序',
        
        }
      ]
    }
  ]
  return {
    diseaseCatalog
  }
})
