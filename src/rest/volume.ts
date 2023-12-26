import axios from 'axios'
import { throwErrorMessage } from '../shared/error'

const getLastAddedVolumes = async ({ language }: { language: string }) => {
  try {
    const response = await axios.get('/volume/getLastAddedVolumes', {
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
