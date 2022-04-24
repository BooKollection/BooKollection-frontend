import { styled, Tab, TabProps } from '@mui/material'

interface CustomTabProps extends TabProps {
  isSelected: boolean
}
const CustomTab = styled(Tab, {
  shouldForwardProp: prop => prop !== 'open'
})<CustomTabProps>(({ theme, isSelected }) => ({
  background: isSelected
    ? theme.palette.primary.light
    : theme.palette.primary.main,
  color: isSelected ? theme.palette.primary.main : theme.palette.primary.light
}))

export { CustomTab }
