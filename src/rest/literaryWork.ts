import axios from 'axios'

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
    const response = await axios.get(
      `${process.env.BACKEND_URI}/literaryWork/getAll`,
      {
        params: {
          offset,
          limit,
          language,
          name
        }
      }
    )

    return response
  } catch (error) {
    console.error('Erro na solicitação:', error)
  }
}

export { getAllLiteraryWork }
