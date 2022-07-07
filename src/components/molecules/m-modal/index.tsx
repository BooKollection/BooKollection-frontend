import * as React from 'react'
import { Box, Modal, ModalProps } from '@mui/material'
import { style } from './styles'
interface CustomModalProps extends ModalProps {
  open: boolean
  setOpen: (value: boolean) => void
  bgColor: string
  border?: string
}
const CustomModal = ({
  open,
  bgColor,
  border,
  setOpen,
  children,
  ...otherProps
}: CustomModalProps) => {
  return (
    <Modal {...otherProps} open={open} onClose={() => setOpen(false)}>
      <Box sx={{ ...style, background: bgColor, border: border }}>
        {children}
      </Box>
    </Modal>
  )
}
export { CustomModal }
