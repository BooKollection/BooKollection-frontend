import axios from 'axios'

const getLastAddedVolumes = async ({ language }: { language: string }) => {
  try {
    const response = await axios.get('/volume/getLastAddedVolumes', {
      params: {
        language
      }
    })

    return response
  } catch (error) {
    console.error('Erro na solicitação:', error)
  }
}

export { getLastAddedVolumes }
