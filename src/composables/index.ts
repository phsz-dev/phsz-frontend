import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ApiService from '../http'
import Page from '../types/Page'

const usePage = <T>(url: string, pageSize: number) => {

  const apiService = new ApiService('')

  const route = useRoute()
  const router = useRouter()

  const page = ref<Page<T>>({
    pageNumber: route.query.page ? parseInt(route.query.page as string) - 1 : 0,
    pageSize: pageSize,
    totalElements: 0,
    totalPages: 0,
    content: []
  })

  // watch(
  //   () => page.value.pageNumber,
  //   (newPage) => {
  //     router.push({ query: { ...route.query, page: newPage + 1 } })
  //     getPage()
  //   }
  // )

  const getPage = async () => {
    page.value = await apiService.get(
      `${url}?pageNum=${page.value.pageNumber}&pageSize=${pageSize}`
    )
  }

  getPage()

  return { page }
}

export { usePage }