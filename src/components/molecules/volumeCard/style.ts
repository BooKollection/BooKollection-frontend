import { AppBar, styled } from '@mui/material'

export const Card = styled('div', {
  shouldForwardProp: prop => prop !== 'owned'
})(({ owned }: { owned: boolean }) => ({
  display: 'flex',
  gap: '2px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1em',
  alignItems: 'center',
  width: '8em',
  minHeight: '10em',
  background:
    'linear-gradient(111.88deg, rgba(255, 255, 255, 0.4) 19.21%, rgba(255, 255, 255, 0.1) 66.23%)',
  boxShadow: '0px 4px 24px -1px rgba(71, 62, 62, 0.25)',
  backdropFilter: 'blur(40px)',
  borderRadius: '10px',
  ...(owned !== undefined && owned !== null && !owned && { opacity: 0.8 })
}))

export const VolumeAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.secondary.main
}))
