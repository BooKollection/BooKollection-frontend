import { styled } from '@mui/material'
import { BoxContainer } from '../../atoms/boxContainer'

export const GridContainer = styled('div')(() => ({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '40% 60%'
}))

export const BoxContainerDetails = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%'
}))
