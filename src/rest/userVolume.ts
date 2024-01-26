import { throwErrorMessage } from '../shared/error'
import { axiosInstance } from './endpoint'

const getCollectionValue = async ({
  coin,
  locale
}: {
  coin: string
  locale: string
}) => {
  try {
    const response = await axiosInstance.get('/userVolume/getCollectionValue', {
      params: {
        coin
      }
    })

    return response
  } catch (error) {
    throwErrorMessage(locale)
  }
}

export { getCollectionValue }
