import HTTPError from './types/error'

import { useUserStore } from './stores/user'

class ApiService {
  baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async post(url: string, data: any, token?: string) {
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    if (token) {
      header.append('Authorization', `Bearer ${token}`)
    }
    const res = await fetch(this.baseUrl + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: header
    })
    return await this._handleResponse(res)
  }

  async postFile(url: string, data: FormData, token?: string) {
    const header = new Headers()
    if (token) {
      header.append('Authorization', `Bearer ${token}`)
    }
    const res = await fetch(this.baseUrl + url, {
      method: 'POST',
      body: data,
      headers: header
    })
    return await this._handleResponse(res)
  }

  async put(url: string, data: any, token?: string) {
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    if (token) {
      header.append('Authorization', `Bearer ${token}`)
    }
    const res = await fetch(this.baseUrl + url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: header
    })
    return await this._handleResponse(res)
  }

  async putFile(url: string, data: FormData, token?: string) {
    const header = new Headers()
    if (token) {
      header.append('Authorization', `Bearer ${token}`)
    }
    const res = await fetch(this.baseUrl + url, {
      method: 'PUT',
      body: data,
      headers: header
    })
    return await this._handleResponse(res)
  }

  async get(url: string, token?: string) {
    const header = new Headers()
    if (token) {
      header.append('Authorization', `Bearer ${token}`)
    }
    const res = await fetch(this.baseUrl + url, {
      method: 'GET',
      headers: header
    })
    return await this._handleResponse(res)
  }

  async delete(url: string, token?: string) {
    const header = new Headers()
    if (token) {
      header.append('Authorization', `Bearer ${token}`)
    }
    const res = await fetch(this.baseUrl + url, {
      method: 'DELETE',
      headers: header
    })
    return await this._handleResponse(res)
  }

  async postStream(url: string, data: any, token?: string, onProgress?: (str: string) => void) {
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    if (token) {
      header.append('Authorization', `Bearer ${token}`)
    }
    const res = await fetch(this.baseUrl + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: header
    })
    const reader = res.body?.getReader()
    if (!reader) {
      throw new Error('response body is null')
    }
    let str = ''
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        break
      }
      str += new TextDecoder().decode(value)
      if (onProgress) {
        onProgress(str)
      }
    }
  }

  async _handleResponse(res: Response) {
    if (!res.ok) {
      if (res.status === 401) {
        // 401 Unauthorized
        const userStore = useUserStore()
        userStore.logout()
      }
      throw new Error(`response error ${res.status}`)
    }
    const t = await res.json()
    // console.log(t)
    if (!t.code) {
      return t.data
    } else {
      throw new HTTPError(t.code, t.msg)
    }
  }
}

export default ApiService
