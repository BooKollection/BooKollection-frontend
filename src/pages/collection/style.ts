import { Box, styled } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '12px',
  borderRadius: '10px',
  height: '100%',
  background: theme.palette.primary.dark
}))
