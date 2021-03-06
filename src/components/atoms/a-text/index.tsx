import { styled, Typography } from '@mui/material'

export const CustomText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textTransform: 'capitalize'
}))

export const CenterText = styled(CustomText)(() => ({
  textAlign: 'center',
  flexGrow: 1
}))
