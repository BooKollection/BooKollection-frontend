import { useEffect, useState } from 'react'
import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import {
  BackToTopButton,
  closedMixin,
  DrawerHeader,
  MainBox,
  openedMixin,
  CustomKeyboardArrowUpIcon
} from './style'
import { useRouter } from 'next/router'
import { i18n } from '../../../shared/i18n'
import { GoogleButton } from '../../atoms/googleButton'
import {
  MenuBook as MenuBookIcon,
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon
} from '@mui/icons-material'
import { CustomModal } from '../modal'
import { SearchBar } from '../searchBar'
import { drawerWidth } from '../../atoms/drawer'
import { CenterText } from '../../atoms'

const iconList = [
  <HomeIcon key="iconList1" color="primary" />,
  <MenuBookIcon key="iconList2" color="primary" />,
  <LibraryBooksIcon key="iconList2" color="primary" />
]

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
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

export const Navbar = ({ children }) => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [isLogged, setIsLogged] = React.useState(false)
  const { locale, push } = useRouter()
  const { titles, cttVersion } = i18n[locale]
  const [showBackToTop, setShowBackToTop] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('tokenTop')
    function debounce(func, timeout = 300) {
      let timer: NodeJS.Timeout
      return (...args: unknown[]) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, timeout)
      }
    }
    setIsLogged(!!token)
    window.addEventListener(
      'scroll',
      debounce(() => {
        if (window.scrollY > window.innerHeight / 3) {
          if (!showBackToTop) {
            setShowBackToTop(true)
          }
        } else {
          setShowBackToTop(false)
        }
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <MainBox sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ background: theme.palette.primary.dark }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography minWidth={150} variant="h6" noWrap component="div">
            BooKollection
          </Typography>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              marginLeft: '10px'
            }}
          >
            <CustomModal>
              <SearchBar />
            </CustomModal>
            {isLogged ? <MenuIcon /> : <GoogleButton />}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          background: theme.palette.primary.dark,
          filter: 'brightness(1.1)'
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ height: 'calc(100% - 7em)' }}>
          {titles.map(
            (
              { label, link }: { label: string; link: string },
              index: number
            ) => (
              <ListItem
                key={label}
                disablePadding
                sx={{ display: 'block' }}
                onClick={() => {
                  push(link)
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center'
                    }}
                  >
                    {iconList[index]}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        {open && <CenterText height={'20px'}>{cttVersion} 0.1</CenterText>}
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          padding: '8px',
          marginTop: '3.5em'
        }}
      >
        {children}
        <BackToTopButton
          showBackToTop={showBackToTop}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
        >
          <CustomKeyboardArrowUpIcon showBackToTop={showBackToTop} />
        </BackToTopButton>
      </Box>
    </MainBox>
  )
}
