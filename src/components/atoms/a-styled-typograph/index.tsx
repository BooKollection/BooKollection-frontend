import { styled, Typography } from '@mui/material'

export const StyledTypograph = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText
}))
