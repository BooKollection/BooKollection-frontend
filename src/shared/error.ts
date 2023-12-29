import { toast } from 'react-toastify'
import { errorMessages } from './i18n/errorServerMessage'

export const throwErrorMessage = (locale: string, errorMessage = '') => {
  const message =
    errorMessage === '' ? errorMessages[locale].SERVER_ERROR : errorMessage
  toast(message, {
    type: 'error',
    closeOnClick: true
  })
}
