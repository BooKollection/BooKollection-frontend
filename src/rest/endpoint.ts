import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URI
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem(process.env.tokenName)

    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

export { axiosInstance }
