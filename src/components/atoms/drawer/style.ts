import { styled, Theme, CSSObject } from '@mui/material/styles'
import { Drawer as MuiDrawer, List } from '@mui/material'
import { drawerWidth } from '.'
import MuiLink from 'next/link'

export const openedMixin = (theme: Theme): CSSObject => ({
  display: 'flex',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  background: theme.palette.primary.main,
  overflowX: 'hidden'
})

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
})

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))
export const DrawerUI = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  display: 'flex',
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  zIndex: theme.zIndex.drawer,
  width: '0px',
  background: theme.palette.primary.dark,
  filter: 'brightness(1.1)',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  }),
  [theme.breakpoints.down('sm')]: {
    width: open ? drawerWidth : 0
  }
}))
export const ListDrawer = styled(List)(() => ({
  height: '100%'
}))
