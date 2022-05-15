import { Box, styled } from '@mui/material'

export const MenuBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '1em',
  width: '10em',
  borderRadius: '0px 10px 10px 0px'
}))
