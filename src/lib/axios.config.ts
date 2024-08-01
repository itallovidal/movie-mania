import axios from 'axios'
import { env } from '../../env.ts'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
  validateStatus: () => true,
})

if (env.VITE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => {
      setTimeout(resolve, Math.round(Math.random() * 2000))
    })

    return config
  })
}
