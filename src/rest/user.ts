import { axiosInstance } from './endpoint'

const login = async (reqTokenId: string) => {
  try {
    const response = await axiosInstance.post('/auth', {
      reqTokenId
    })

    return response
  } catch (error) {
    console.error('Erro na solicitação:', error)
  }
}

export { login }
