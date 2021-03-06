import { Grid, styled } from '@mui/material'
import { BoxContainer } from '../../atoms'

export const StyledBox = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  border: '1px',
  borderColor: theme.palette.primary.light,
  borderRadius: '10px'
}))

export const StyledBoxContainer = styled(BoxContainer)(({ theme }) => ({
  background: theme.palette.primary.main
}))

export const ImgGridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%'
  }
}))
