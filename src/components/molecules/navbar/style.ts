import { Box, IconButton, styled, Toolbar } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { drawerWidth } from '../../atoms/drawer'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}
export const CustomToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}))
export const SandwichIcon = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))
export const ButtonsBox = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(8em, 12em))',
  gap: '1em',
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.secondary.main,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

export const LogoBox = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-betweeen',
  alignItems: 'center'
}))

export const MainBox = styled(Box)(() => ({
  width: '100%'
}))

export const ChildrenMainBox = styled('div')(() => ({
  width: '100%',
  height: '100%',
  minHeight: '100vh'
}))
