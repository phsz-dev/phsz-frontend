import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '../router'
import ApiService from '../http'
import HTTPError from '../types/error'

const apiService = new ApiService('')

export const useUserStore = defineStore('user', () => {
  const logging = ref(false)
  const register = async (username: string, password: string) => {
    let data = {
      username,
      password
    }

    const res = await apiService.post('/api/auth/register', data)
    if (res) {
      router.push({
        path: '/login',
        query: {
          "username": username
        }
      })
    }
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
    login,
    logout() {
      localStorage.removeItem('token')
    },
    register
  }
})
