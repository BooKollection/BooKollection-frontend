import * as React from 'react'
import MuiBackdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../store/reducers'

export const Backdrop = () => {
  const { open } = useSelector((state: IRootState) => state.loading)

  return (
    <div>
      <MuiBackdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1000 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </MuiBackdrop>
    </div>
  )
}
