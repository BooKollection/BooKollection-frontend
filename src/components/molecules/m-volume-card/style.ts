import { AppBar, Box, styled } from '@mui/material'

export const VolumeAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main
}))

export const CustomButtonBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light
}))
