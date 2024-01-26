import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import {
  BackToTopButton,
  MainBox,
  CustomKeyboardArrowUpIcon,
  AppBar,
  ChildrenBox
} from './style'
import { GoogleButton } from '../../atoms/a-google-button'
import { SearchBar } from '../m-search-bar'
import { Drawer } from '../m-drawer'
import { IRootState } from '../../../store/reducers'
import { USER_UPDATE } from '../../../store/actions'
import { debounce } from '../../../utils/bounce'
import { MenuI } from '../../atoms'
import { Link } from '@mui/material'
 
export const Navbar = ({ children }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const { token } = useSelector((state: IRootState) => state.user)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const lsToken = localStorage.getItem(process.env.tokenName)
    const name = localStorage.getItem('BK_NAME')
    if (lsToken) {
      dispatch({
        type: USER_UPDATE,
        payload: {
          token: lsToken,
          name: name
        }
      })
    }
  }, [token, dispatch])
  useEffect(() => {
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
    <MainBox>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ background: theme.palette.primary.dark }}
      >
        <Toolbar
          style={{
            display: 'flex',
            width: '100%',
            paddingRight: '10px !important'
          }}
        >
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
            <Link href="/">BooKollection</Link> 
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
            {token ? <MenuI /> : <GoogleButton />}
            <SearchBar
              drawerOpen={open}
              handleDrawerClose={handleDrawerClose}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <ChildrenBox>
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
      </ChildrenBox>
    </MainBox>
  )
}
