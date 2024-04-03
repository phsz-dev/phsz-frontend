import { defineStore } from 'pinia'
import router from '../router'
import ApiService from '../http'
import { useStorage } from '@vueuse/core'

const apiService = new ApiService('')

export const useUserStore = defineStore('user', () => {
  const token = useStorage('token', undefined)
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
      localStorage.setItem('token', res.token)
      router.push('/home')
    }

    // console.log(res)
  }

  const getUserInfo = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      return null
    }
    const res = await fetch('/api/user/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  return {
    token,
    login,
    logout() {
      localStorage.removeItem('token')
    },
    register
  }
})
