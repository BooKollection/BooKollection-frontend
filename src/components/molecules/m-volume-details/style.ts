import { Box, styled } from '@mui/material'

export const GridContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5px',
  justifyContent: 'center'
}))

export const BoxContainerDetails = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '2em 1em',
  width: '100%',
  minHeight: '100%',
  justifyContent: 'center'
}))
