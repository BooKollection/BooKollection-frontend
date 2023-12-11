import axios from 'axios'

const login = async (reqTokenId: string) => {
  try {
    const response = await axios.post(`${process.env.BACKEND_URI}/auth`, {
      reqTokenId
    })

    return response
  } catch (error) {
    console.error('Erro na solicitação:', error)
  }
}

export { login }
