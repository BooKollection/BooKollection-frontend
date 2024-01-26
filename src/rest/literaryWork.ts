import { throwErrorMessage } from '../shared/error'
import { axiosInstance } from './endpoint'

const getAllLiteraryWork = async ({
  offset,
  limit,
  language,
  name
}: {
  offset: number
  limit: number
  language: string
  name?: string
}) => {
  try {
    const response = await axiosInstance.get('literaryWork/getAll', {
      params: {
        offset,
        limit,
        language,
        name
      }
    })

    return response
  } catch (error) {
    throwErrorMessage(language)
    throw error
  }
}

const getAllUserLiteraryWork = async ({ language }: { language: string }) => {
  try {
    const response = await axiosInstance.get(
      '/literaryWork/getUserLiteraryWorks',
      {
        params: {
          language
        }
      }
    )

    return response
  } catch (error) {
    throwErrorMessage(language)
    throw error
  }
}

export { getAllLiteraryWork, getAllUserLiteraryWork }
