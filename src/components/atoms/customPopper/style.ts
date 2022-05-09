import { Box, styled } from '@mui/material'

export const MenuBox = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  borderRadius: '0px 10px 10px 0px',
  width: '100%'
}))