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

const getAllVolumes = async ({
  offset,
  limit,
  language,
  literaryWork
}: {
  language: string
  offset: number
  limit: number
  literaryWork: string
}) => {
  try {
    const response = await axiosInstance.get('/volume/getAllVolumes', {
      params: {
        offset,
        limit,
        language,
        literaryWork
      }
    })

    return response
  } catch (error) {
    throwErrorMessage(language)
    throw error
  }
}

export { getLastAddedVolumes, getAllVolumes }
