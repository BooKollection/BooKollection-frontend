import * as React from 'react'
import MuiBackdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'

export const Backdrop = () => {
    const { name } = useSelector((state: IRootState) => state.user)

  return (
    <div>
      <MuiBackdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </MuiBackdrop>
    </div>
  )
}
