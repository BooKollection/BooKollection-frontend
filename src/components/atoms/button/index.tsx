import Button from '@mui/material/Button'
import { alpha, styled } from '@mui/material'

export const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  }
}))
