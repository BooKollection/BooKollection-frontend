import { styled, Tab, TabProps } from '@mui/material'

interface CustomTabProps extends TabProps {
  isSelected: boolean
}
const CustomTab = styled(Tab, {
  shouldForwardProp: prop => prop !== 'isSelected'
})<CustomTabProps>(({ theme, isSelected }) => ({
  background: isSelected
    ? theme.palette.primary.light
    : theme.palette.primary.main,
  color: isSelected ? '#ffff' : theme.palette.primary.contrastText,
  borderRadius: '10px 10px 0px 0px'
}))

export { CustomTab }
