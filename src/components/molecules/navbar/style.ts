import {
  Box,
  CSSObject,
  IconButton,
  styled,
  Theme,
  Toolbar
} from '@mui/material'
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

export const ButtonsBox = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3,minmax(8em, 12em))',
  gap: '0px 1em',
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

export const LogoBox = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-betweeen',
  alignItems: 'center'
}))
export const MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '-webkit-fill-available',
  width: '100%',
  background: theme.palette.primary.main
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
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

export const CustomAppbar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.secondary.main
}))

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
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
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))
