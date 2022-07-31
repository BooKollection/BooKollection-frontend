import { styled } from '@mui/material'
import ContentEditable from 'react-contenteditable'

export const StyledContentEditable = styled(ContentEditable)(({ theme }) => ({
  textAlign: 'justify',
  '& p': {
    color: theme.palette.primary.contrastText + ' !important',
    textAlign: 'justify'
  },
  '& div': {
    color: theme.palette.primary.contrastText + ' !important',
    textAlign: 'justify'
  }
}))
