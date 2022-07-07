import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store/reducers'
import { Alert, Snackbar } from '@mui/material'
import { snackbarUpdate } from '../../../store/actions/snackbar'
import { i18n } from '../../../shared/i18n'
import { useRouter } from 'next/router'

export const MuiSnackBar = () => {
  const { open, message, severity } = useSelector(
    (state: IRootState) => state.snackbar
  )
  const dispatch = useDispatch()
  const { locale } = useRouter()
  const { warning } = i18n[locale]
  const handleClose = () => {
    dispatch(snackbarUpdate({ open: false }))
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        color={severity}
        severity={severity}
        sx={{ width: '100%' }}
      >
        {warning}: {' ' + message}
      </Alert>
    </Snackbar>
  )
}
