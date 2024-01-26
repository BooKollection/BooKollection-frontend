import { EN_US, PT_BR } from '../constants'

export const errorMessages = {
  [PT_BR]: {
    SERVER_ERROR: 'Erro de comunicação com o servidor',
    UNAUTORIZED: 'Sessão expirada por favor logue de novo'
  },
  [EN_US]: {
    SERVER_ERROR: 'Communication error with the server',
    UNAUTORIZED: 'Session expired, please log in again'
  }
}
