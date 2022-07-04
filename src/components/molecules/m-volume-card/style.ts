import { alpha, AppBar, Box, InputBase, styled } from '@mui/material'

export const VolumeAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main
}))

export const CustomButtonBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light
}))

export const CustomTextField = styled(InputBase)(({ theme }) => ({
  borderRadius: '0px 10px 10px 0px',
  width: '100%',
  color: theme.palette.primary.contrastText,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: '1em',
    transition: theme.transitions.create('width'),
    width: '100%',
    minWidth: '10rem'
  }
}))
