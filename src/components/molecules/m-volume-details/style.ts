import { Box, Grid, styled } from '@mui/material'

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    flexWrap: 'wrap'
  }
}))

export const BoxContainerDetails = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '2em 1em',
  width: '100%',
  flexWrap: 'wrap',
  minHeight: '100%',
  justifyContent: 'center'
}))

export const ImgGridItem = styled(Grid)(({}) => ({
  display: 'block',
  flex: 1,
  position: 'relative',
  minHeight: '200px',
  marginRight: '15px'
}))
