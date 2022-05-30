import { alpha, InputBase, styled, Theme, keyframes } from '@mui/material'

const expandWidthSearch = keyframes`
  0% {
    display: flex;
    opacity: 0;
    width: 0%;
  }
  5% {
      opacity: 1;
  }
  100% {
    width: 100%;
  }
`

const expandHeightSearch = keyframes`
  0% {
    display: flex;
    opacity: 0;
    height: 0px;
  }
  45% {
      opacity: 0;
  }
  100% {
    opacity: 1;
    height: 59px;
  }
`

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '0px 10px 10px 0px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    marginRight: 0
  }
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
export const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  opacity: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '10px',
  width: '100%',
  animation: `${expandWidthSearch} 0.3s ease-out`,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    position: 'fixed',
    height: 0,
    background: theme.palette.primary.dark,
    left: 0,
    right: 0,
    padding: '10px',
    top: '4em',
    animation: `${expandHeightSearch} 0.6s ease-out`,
    animationFillMode: 'forwards',
    marginLeft: '0px',
    overflow: 'hidden',
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
  }
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    minWidth: '10rem'
  }
}))
