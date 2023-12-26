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
    console.error('Erro na solicitação:', error)
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
    console.error('Erro na solicitação:', error)
  }
}

export { getAllLiteraryWork, getAllUserLiteraryWork }
