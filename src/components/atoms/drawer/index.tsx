import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { DrawerHeader, DrawerUI } from './style'
import { i18n } from '../../../shared/i18n'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../store/reducers'
import { CenterText } from '../text'
import {
  MenuBook as MenuBookIcon,
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon
} from '@mui/icons-material'
export const drawerWidth = 200

export const Drawer = ({
  open,
  handleDrawerClose
}: {
  open: boolean
  handleDrawerClose
}) => {
  const theme = useTheme()
  const { locale, push } = useRouter()
  const { titles, cttVersion } = i18n[locale]
  const iconList = [
    <HomeIcon key="iconList1" color="primary" />,
    <MenuBookIcon key="iconList2" color="primary" />,
    <LibraryBooksIcon key="iconList2" color="primary" />
  ]

  const { token } = useSelector((state: IRootState) => state.user)
  const Item = ({ link, index, icon, label, disabled }) => {
    console.log(link, label)
    const children = (
      <ListItem disabled={disabled}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    )
    if (disabled) {
      return <span>{children}</span>
    }
    return (
      <Link key={'navbar' + index} passHref href={link} locale={locale}>
        {children}
      </Link>
    )
  }

  return (
    <DrawerUI variant="permanent" open={open}>
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
          ({ label, link }: { label: string; link: string }, index: number) => (
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
                <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      {open && <CenterText height={'20px'}>{cttVersion} 0.1</CenterText>}
    </DrawerUI>
  )
}
export async function getStaticProps(context) {
  return {
    props: {
      context
    }
  }
}
