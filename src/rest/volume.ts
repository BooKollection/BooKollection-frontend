import { axiosInstance } from './endpoint'
import { throwErrorMessage } from '../shared/error'

const getLastAddedVolumes = async ({ language }: { language: string }) => {
  try {
    const response = await axiosInstance.get('/volume/getLastAddedVolumes', {
      params: {
        language
      }
    })

    return response
  } catch (error) {
    throwErrorMessage(language)
    throw error
  }
}

export { getLastAddedVolumes }
