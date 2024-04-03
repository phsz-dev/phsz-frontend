import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import router from '../router'
import ApiService from '../http'
import HTTPError from '../types/error'

const apiService = new ApiService('')

export const useUserStore = defineStore('user', () => {
  const token = useStorage('token', undefined)
  const username = ref('')
  const email = ref('')
  const roles = ref<string[]>([])

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
      console.log(res)
      username.value = res.username
    } catch (e) {
      if (e instanceof HTTPError) {
        // token 失效
        logout()
      } else {
        // 服务器内部错误
        console.error(e)
      }
    }
  }

  hydrate()

  return {
    token,
    username,
    email,
    roles,
    login,
    logout,
    register,
    hydrate
  }
})
