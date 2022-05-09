import { Box, styled } from '@mui/material'

export const GridContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%'
}))

export const BoxContainerDetails = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  position: 'absolute',
  top: '3%',
  padding: '2em 0em',
  width: '100%',
  height: '97%'
}))
