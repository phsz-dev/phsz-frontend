import HTTPError from './types/error'

class ApiService {
  baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async post(url: string, data: object, token?: string) {
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

  async _handleResponse(res: Response) {
    if (!res.ok) {
      throw new Error(`response error ${res.status}`)
    }
    const t = await res.json()
    // console.log(t)
    if (!t.code) {
      return t.data
    } else {
      throw new HTTPError(t.code, t.message)
    }
  }
}

export default ApiService
