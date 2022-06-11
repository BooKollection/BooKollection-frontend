import { Grid, styled } from '@mui/material'

export const CardGridBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  gap: '1em',
  marginLeft: '0px !important',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}))
