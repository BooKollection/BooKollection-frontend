import * as React from 'react'
import { Box, Modal } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/router'
import { StyledButton } from '../../atoms/button'
import { i18n } from '../../../shared/i18n'
import { style } from './styles'

const CustomModal = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { locale } = useRouter()
  const { search } = i18n[locale]

  return (
    <div>
      <StyledButton onClick={handleOpen}>
        <SearchIcon />
        {search}
      </StyledButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  )
}
export { CustomModal }
