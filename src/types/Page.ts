export default interface Page<T> {
  content: T[]
  totalElements: number
  totalPages: number
  pageNumber: number
  pageSize: number
  orderColumn: string,
  orderType: string
}
