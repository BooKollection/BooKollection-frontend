import { Box, Popover, styled } from '@mui/material'

export const MenuBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  width: '100%'
}))

export const StyledPopover = styled(Popover)(({}) => ({
  '& .MuiPaper-root': {
    borderRadius: '0px 10px 10px 0px !important'
  }
}))
