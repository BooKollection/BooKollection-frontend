import {
  Box,
  ButtonProps,
  CSSObject,
  IconButton,
  styled,
  Theme,
  Toolbar
} from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { StyledButton } from '../../atoms'
import { drawerWidth } from '../../atoms/a-drawer'

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
  position: 'relative',
  minHeight: '-webkit-fill-available',
  width: '100%',
  background: theme.palette.primary.main
}))
export const ChildrenBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: '8px',
  marginTop: '3.5em',
  [theme.breakpoints.up('sm')]: {
    marginLeft: '3.5rem'
  }
}))

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => {
  return {
    zIndex: theme.zIndex.drawer + 1,
    height: '4em !important',
    minHeight: '4em !important',
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
  }
})

export const CustomAppbar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main
}))

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })
})

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
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

interface ShowBackToTopProps extends ButtonProps {
  showBackToTop: boolean
}
export const BackToTopButton = styled(StyledButton, {
  shouldForwardProp: prop => prop !== 'showBackToTop'
})<ShowBackToTopProps>(({ theme, showBackToTop }) => ({
  position: 'fixed',
  bottom: '5%',
  right: '5%',
  background: theme.palette.primary.light,
  width: showBackToTop ? '50px !important' : '0px !important',
  minWidth: showBackToTop ? '50px !important' : '0px !important',
  height: showBackToTop ? '50px !important' : '0px !important',
  borderRadius: '50%',
  transform: 'scale(1)',
  transition: 'all .4s ease-in-out',
  ...(!showBackToTop && { padding: '0px !important' })
}))

export const CustomKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon, {
  shouldForwardProp: prop => prop !== 'showBackToTop'
})<ShowBackToTopProps>(({ showBackToTop }) => ({
  width: showBackToTop ? '100% !important' : '0px !important',
  minWidth: showBackToTop ? '100%  !important' : '0px !important',
  height: showBackToTop ? '100%  !important' : '0px !important',
  padding: '0px !important'
}))
