import { Box, styled } from '@mui/material'

const BoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    height: '100%'
  }
}))

export { BoxContainer }
