import { LOADING_UPDATE } from '..'

export const loadingUpdate = (action: { open: boolean }) => ({
  type: LOADING_UPDATE,
  payload: action
})
