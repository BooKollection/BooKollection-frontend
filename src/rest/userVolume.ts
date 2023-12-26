import { axiosInstance } from './endpoint'

const getCollectionValue = async ({ coin }: { coin: string }) => {
  try {
    const response = await axiosInstance.get('/userVolume/getCollectionValue', {
      params: {
        coin
      }
    })

    return response
  } catch (error) {
    console.error('Erro na solicitação:', error)
  }
}

export { getCollectionValue }
