import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URI
})

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem(process.env.tokenName)

  config.headers.Authorization = `Bearer ${token}`

  return config
})

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem(process.env.tokenName)
      localStorage.removeItem('BK_NAME')
      window.location.href = '/?error=login'
    } else {
      return Promise.reject(error)
    }
  }
)
export { axiosInstance }
