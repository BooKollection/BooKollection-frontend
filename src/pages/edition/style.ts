import { styled } from '@mui/material'

export const StyledBox = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  border: '1px',
  borderColor: theme.palette.primary.light,
  padding: '12px 0px',
  borderRadius: '10px'
}))
