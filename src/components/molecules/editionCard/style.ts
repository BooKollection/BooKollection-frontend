import { Box, styled } from '@mui/material'

export const Card = styled('div')(() => ({
  position: 'relative',
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
  borderRadius: '10px'
}))
export const MenuBox = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: '1em',
  width: '10em',
  borderRadius: '0px 10px 10px 0px'
}))
