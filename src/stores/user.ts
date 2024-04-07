import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import router from '../router'
import ApiService from '../http'
import RoughCases from '../types/RoughCase'

const apiService = new ApiService('')

export const useUserStore = defineStore('user', () => {
  const token = useStorage('token', undefined)
  const username = ref('')
  const email = ref('')
  const roles = ref<string[]>([])
  const userList = ref<any>([])
  const collectedCase = ref<RoughCases[]>([])

  const register = async (username: string, password: string) => {
    let data = {
      username,
      password
    }

    return await apiService.post('/api/auth/register', data)
  }

  const login = async (username: string, password: string) => {
    let data = {
      username,
      password
    }
    // fetch发起请求
    const res = await apiService.post('/api/auth/login', data)
    if (res) {
      token.value = res.token
      router.push('/home')
      hydrate()
    }

    // console.log(res)
  }

  const logout = () => {
    token.value = undefined
    username.value = ''
    email.value = ''
    roles.value = []
    router.push('/login')
  }

  const hydrate = async () => {
    if (!token.value) {
      return
    }
    try {
      const res = await apiService.get('/api/users/me', token.value)
      username.value = res.username
      email.value = res.email
      roles.value = res.roles
    } catch (e) {
      // do nothing
    }
  }

  hydrate()

  const getUserList = async (
    pageNum: number,
    pageSize: number,
  ) => {
    try {
      const res = await apiService.get(
        '/api/users' +
        '?pageNum=' +
        pageNum +
        '&pageSize=' +
        pageSize,
        token.value
      )
      console.log(res)
      userList.value = res
    } catch (e) {
      console.log(e)
    }
  }

  const getCollectedCase = async(pageNum:number,pageSize:number) =>{
    try {
      const res = await apiService.get(`/api/cases/collect/mine/${pageNum}/${pageSize}`, token.value)
      collectedCase.value = res
    } catch (e) {
      console.log(e)
    }
  }

  const updateUser = async (data: object) => {
    try {
      console.log(data)
      await apiService.put('/api/users', data, token.value)
    } catch (e) {
      console.log(e)
    }
  }

  return {
    token,
    username,
    email,
    roles,
    userList,
    login,
    logout,
    register,
    hydrate,
    getUserList,
    getCollectedCase,
    updateUser,
  }
})
