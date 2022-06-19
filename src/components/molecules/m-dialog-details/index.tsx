import React from 'react'
import { Slide, Dialog, Toolbar, IconButton, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'
import { VolumeAppBar } from './style'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DialogDetails = ({ title, open, setOpen, children }) => {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      style={{ height: '100%' }}
    >
      <VolumeAppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </VolumeAppBar>
      <div style={{ height: '100%' }}>{children}</div>
    </Dialog>
  )
}

export { DialogDetails }
