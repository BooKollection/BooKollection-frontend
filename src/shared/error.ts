import { toast } from 'react-toastify'
import { error } from './i18n/errorServerMessage'

export const throwErrorMessage = (locale: string, errorMessage = '') => {
  const message =
    errorMessage === '' ? error[locale].SERVER_ERROR : errorMessage
  toast(message, {
    type: 'error',
    closeOnClick: true
  })
}
