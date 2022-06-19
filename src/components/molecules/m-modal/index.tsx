import * as React from 'react'
import { Box, Modal } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/router'
import { StyledButton } from '../../atoms/a-button'
import { i18n } from '../../../shared/i18n'
import { style } from './styles'
import Tooltip from '@mui/material/Tooltip'

const CustomModal = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { locale } = useRouter()
  const { search } = i18n[locale]

  return (
    <Tooltip title={search}>
      <>
        <StyledButton onClick={handleOpen}>
          <SearchIcon />
        </StyledButton>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>{children}</Box>
        </Modal>
      </>
    </Tooltip>
  )
}
export { CustomModal }
