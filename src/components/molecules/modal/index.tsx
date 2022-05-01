import * as React from 'react'
import { Box, Modal } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/router'
import { StyledButton } from '../../atoms/button'
import { searchModalLabel } from '../../../shared/i18n'
import { style } from './styles'

const CustomModal = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { locale } = useRouter()
  const { label } = searchModalLabel[locale]

  return (
    <div>
      <StyledButton onClick={handleOpen}>
        <SearchIcon />
        {label}
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  )
}
export { CustomModal }
