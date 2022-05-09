import { styled } from '@mui/material'
import { theme } from '../../../styles/theme'

export const FooterContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '13px',
  width: '100%',
  height: '76px',
  background: theme.palette.secondary.main
}))

export const FooterElements = styled('div')(() => ({
  color: theme.palette.primary.light
}))

export const ButtonScroll = styled('button')(() => ({
  width: '127px',
  height: '20px',
  left: '336.5px',
  top: '43px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  textDecorationLine: 'underline',
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.secondary.main,
  border: 'none',
  '&:hover': {
    cursor: 'pointer'
  }
}))

export const Title = styled('b')(() => ({}))

export const Subtitle = styled('span')(() => ({}))
