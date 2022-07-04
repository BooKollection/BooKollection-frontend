import { AlertColor } from '@mui/material'
import { SNACKBAR_UPDATE } from '..'

export const snackbarUpdate = (action: {
  open?: boolean
  message?: string
  severity?: AlertColor
}) => ({
  type: SNACKBAR_UPDATE,
  payload: action
})
