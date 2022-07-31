import { useTheme } from '@mui/material'
import { useRef } from 'react'
import { StyledContentEditable } from './style'

export const ContentEdit = ({ text, setText, disabled = true }) => {
  const theme = useTheme()
  const contentEditable = useRef()

  return (
    <StyledContentEditable
      style={{
        background: theme.palette.primary.darkContrast,
        color: theme.palette.primary.contrastText,
        padding: '15px',
        borderRadius: '15px',
        width: '100%'
      }}
      disabled={disabled}
      innerRef={contentEditable}
      html={text} // innerHTML of the editable div
      onChange={e => {
        setText(e.target.value)
      }} // handle innerHTML change
    />
  )
}
