import { Box, styled } from '@mui/material'

const BoxContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '100%',
  width: '100%',
  padding: '1em'
}))

export { BoxContainer }
