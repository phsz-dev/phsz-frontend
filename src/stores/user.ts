import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const logging = ref(false)
  const register = async (username:string, password:string) => {
    let data = {
      username,
      password
    }
    // fetch发起请求
    const res = await fetch('/api/auth/register',{
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })

    const t = await res.json()
    if(t.code) {
      return "true"
    }else {
      return t.msg
    }
  }

  const login = async (username:string, password:string) => {
    let data = {
      username,
      password
    }
    // fetch发起请求
    const res = await fetch('/api/auth/login',{
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })

    const t = await res.json()
    console.log(t)
    if(t.code) {
      localStorage.setItem('token', t.data.token)
      return "true"
    }else {
      return t.msg
    }
  }

  const getUserInfo = async () => {
    const token = localStorage.getItem('token')
    if(!token) {
      return null
    }
    const res = await fetch('/api/user/me', {
      headers: {
        'Authorization': `Bearer ${token}`
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
