import { Box, styled } from '@mui/material'

const BoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.primary.main,
  height: '100%',
  width: '100%',
}))

export { BoxContainer }
