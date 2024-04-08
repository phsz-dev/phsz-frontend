import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import router from '../router'
import ApiService from '../http'
import Page from '../types/Page'
import RoughCase from '../types/RoughCase'

const apiService = new ApiService('')

export const useUserStore = defineStore('user', () => {
  const token = useStorage<string | undefined>('token', undefined)
  const username = ref('')
  const email = ref('')
  const roles = ref<string[]>([])
  const avatar = ref('')
  const userList = ref<any>([])
  const collectPageInfo = ref<Page<RoughCase>>()

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
      avatar.value = res.avatar
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
      userList.value = res
    } catch (e) {
      console.log(e)
    }
  }

  const getCollectedCase = async(pageNum:number,pageSize:number) =>{
    try {
      const res = await apiService.get(`/api/cases/collect/mine?pageNum=${pageNum}&pageSize=${pageSize}`, token.value)
      console.log(res)
      collectPageInfo.value = res
    } catch (e) {
      console.log(e)
    }
  }

  const updateUser = async (data: object) => {
    try {
      await apiService.put('/api/users', data, token.value)
    } catch (e) {
      console.log(e)
    }
  }
  const updateUserInfo = async (email:string) => {
    try {
      await apiService.put('/api/users/update/normal', {email}, token.value)
      hydrate()
    } catch (e) {
      console.log(e)
    }
  }

  const uploadAvatar = async (file:File) =>{
    try {
      const formData = new FormData()
      formData.append('file',file)
      await apiService.putFile('/api/users/update/avatar', formData, token.value)
      hydrate()
    } catch (e) {
      console.log(e)
    }
  
  }

  const sortUserList = (key: string, order: number) => {
    userList.value.content.sort((a: any, b: any) => {
      if (a[key] > b[key]) {
        return order
      } else {
        return -order
      }
    })
  }

  return {
    token,
    username,
    email,
    roles,
    avatar,
    userList,
    collectPageInfo,
    login,
    logout,
    register,
    hydrate,
    getCollectedCase,
    updateUserInfo,
    uploadAvatar,
    getUserList,
    updateUser,
    sortUserList
  }
})
