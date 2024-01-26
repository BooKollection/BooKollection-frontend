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

const getAllUserVolume = async ({
  offset,
  limit,
  locale
}: {
  offset: number
  limit: number
  locale: string
}) => {
  try {
    const response = await axiosInstance.get('/userVolume/getAllUserVolumes', {
      params: {
        offset,
        limit
      }
    })

    return response
  } catch (error) {
    throwErrorMessage(locale)
  }
}

const createUserVolume = async ({
  purchasedPrice,
  purchasedDate,
  purchasedPriceUnit,
  volume,
  locale
}: {
  purchasedPrice?: number
  purchasedDate: Date
  purchasedPriceUnit?: string
  volume: string
  locale: string
}) => {
  try {
    const response = await axiosInstance.post('/userVolume', {
      purchasedPrice,
      purchasedDate,
      purchasedPriceUnit,
      volume
    })

    return response
  } catch (error) {
    throwErrorMessage(locale)
  }
}

const deleteUserVolume = async ({
  volumeId,
  locale
}: {
  volumeId: string
  locale: string
}) => {
  try {
    const response = await axiosInstance.delete('/userVolume', {
      params: {
        volumeId
      }
    })

    return response
  } catch (error) {
    throwErrorMessage(locale)
  }
}
export {
  getCollectionValue,
  createUserVolume,
  getAllUserVolume,
  deleteUserVolume
}
