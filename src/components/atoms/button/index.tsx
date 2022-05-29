import Button from '@mui/material/Button'
import { alpha, styled } from '@mui/material'

export const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  color: theme.palette.primary.contrastText,
  '&:hover': {
    background: alpha(theme.palette.primary.dark, 0.25)
  }
}))
