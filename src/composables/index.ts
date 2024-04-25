import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ApiService from '../http'
import Page from '../types/Page'

const usePage = <T>(initialUrl: string, pageSize: number, token?: string) => {
  const apiService = new ApiService('')
  const url = ref<string>(initialUrl)
  const params = ref<any>({})

  const route = useRoute()
  const router = useRouter()

  const page = ref<Page<T>>({
    pageNumber: route.query.page ? parseInt(route.query.page as string) - 1 : 0,
    pageSize: pageSize,
    totalElements: 0,
    totalPages: 0,
    content: []
  })

  watch(
    () => page.value.pageNumber,
    (newPage) => {
      console.log('page changed')
      router.push({ query: { ...route.query, page: newPage + 1 } })
      getPage()
    }
  )

  watch(
    () => [params.value, page.value.orderColumn, page.value.orderType],
    (newValue) => {
      console.log('params changed', newValue)
      page.value.pageNumber = 0
      getPage()
    }
  )

  const getPage = async () => {
    const searchParams = {
      ...params.value,
      pageNum: page.value.pageNumber,
      pageSize: page.value.pageSize
    }
    if (page.value.orderColumn) {
      searchParams['orderColumn'] = page.value.orderColumn
      searchParams['orderType'] = page.value.orderType
    }
    const res = await apiService.get(
      url.value + '?' + new URLSearchParams(searchParams),
      token
    )
    
    page.value.content = res.content
    page.value.totalElements = res.totalElements
    page.value.totalPages = res.totalPages
  }

  getPage()

  return { page, url, params }
}

export { usePage }
