import { styled } from '@mui/material'

export const GridContainer = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  gridTemplateColumns: '50% 50%'
}))
