import { styled, Theme } from '@mui/material'
import MuiCard, { CardProps } from '@mui/material/Card'
interface ExtendedCardProps extends CardProps {
  open: boolean
}
export const Card = styled(MuiCard)<ExtendedCardProps>(({ theme, open }) => ({
  display: 'flex',
  gap: '2px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1em',
  alignItems: 'center',
  width: '12em',
  minHeight: '10em',
  background: theme.palette.primary.darkContrast,
  boxShadow: '0px 4px 24px -1px rgba(71, 62, 62, 0.25)',
  backdropFilter: 'blur(40px)',
  borderRadius: open ? '10px 0px 10px 10px' : '10px',
  cursor: 'pointer'
}))
