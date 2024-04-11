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
      router.push({ query: { ...route.query, page: newPage + 1 } })
      getPage()
    }
  )

  watch(
    () => params.value,
    () => {
      page.value.pageNumber = 0
      getPage()
    }
  )

  const getPage = async () => {
    const res = await apiService.get(
      url.value + '?' + new URLSearchParams({ ...params.value, pageNum: page.value.pageNumber, pageSize: page.value.pageSize }),
      token
    )
    if (res.pageNumber === page.value.pageNumber) {
      page.value = res
    }
  }

  getPage()

  return { page, url, params }
}

export { usePage }
