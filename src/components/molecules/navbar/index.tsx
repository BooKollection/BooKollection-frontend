import { useEffect, useState } from 'react'
import { GoogleButton } from '../../atoms/googleButton'
import { useRouter } from 'next/router'
import { CssBaseline, Box } from '@mui/material'
import {
  MenuBook as MenuBookIcon,
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon
} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer } from '../../atoms/drawer'
import { SearchBar } from '../searchBar'
import { MenuI } from '../../atoms/menu'
import { CustomModal } from '../modal'
import { StyledButton } from '../../atoms/button'
import { CustomText } from '../../atoms/text'
import {
  AppBar,
  LogoBox,
  CustomToolbar,
  SandwichIcon,
  ButtonsBox,
  DrawerHeader,
  MainBox,
  ChildrenMainBox
} from './style'
import { navbarButtonTitles } from '../../../shared/i18n/navbar'
import Link from 'next/link'
const iconList = [
  <HomeIcon color="primary" />,
  <MenuBookIcon color="primary" />,
  <LibraryBooksIcon color="primary" />
]
const Navbar = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const { locale } = useRouter()
  const { titles } = navbarButtonTitles[locale]

  useEffect(() => {
    const token = localStorage.getItem('tokenTop')

    setIsLogged(!!token)
  }, [])
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <CustomToolbar>
          <LogoBox>
            <SandwichIcon
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ...(open && { display: 'none' })
              }}
            >
              <MenuIcon />
            </SandwichIcon>
            <CustomText variant="h6">BooKollection</CustomText>
          </LogoBox>
          <ButtonsBox>
            {titles.map(
              (
                { label, link }: { label: string; link: string },
                index: number
              ) => (
                <StyledButton
                  disabled={index === 1 && !isLogged}
                  key={'navbar' + index}
                >
                  <div style={{ marginRight: index === 1 ? '10px' : '5px' }}>
                    {iconList[index]}
                  </div>
                  <Link href={{ pathname: link }} locale={locale}>
                    {label}
                  </Link>
                </StyledButton>
              )
            )}
          </ButtonsBox>
          <CustomModal>
            <SearchBar />
          </CustomModal>
          {isLogged ? <MenuI /> : <GoogleButton />}
        </CustomToolbar>
      </AppBar>
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <MainBox component="main">
        <DrawerHeader />
        <ChildrenMainBox>{children}</ChildrenMainBox>
      </MainBox>
    </Box>
  )
}

export { Navbar }
