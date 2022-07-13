import { Box, styled } from '@mui/material'

export const FlexBox = styled('div')(({ theme }) => ({
  flex: 1
}))
export const BoxContainerDetails = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '2em 1em',
  width: '100%',
  flexWrap: 'wrap',
  minHeight: '100%',
  justifyContent: 'center'
}))

export const LiteraryWorksBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  padding: '2em 1em',
  borderRadius: '10px',
  width: '100%',
  flexWrap: 'wrap',
  minHeight: '100%',
  justifyContent: 'center'
}))

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    flexWrap: 'wrap'
  }
}))
