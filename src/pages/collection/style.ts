import { Box, styled } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  border: '2px solid',
  borderColor: theme.palette.primary.light,
  padding: '12px',
  borderRadius: '10px',
  height: '100%'
}))
