import { throwErrorMessage } from '../shared/error'
import { axiosInstance } from './endpoint'

const login = async (reqTokenId: string, locale: string) => {
  try {
    const response = await axiosInstance.post('/auth', {
      reqTokenId
    })

    return response
  } catch (error) {
    throwErrorMessage(locale)
  }
}

export { login }
