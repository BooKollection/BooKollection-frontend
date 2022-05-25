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
  const Item = ({ link, index, label, disabled }) => {
    console.log(link, label)
    const children = (
      <ListItem disabled={disabled}>
        <ListItemIcon>{iconList[index]}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    )
    if (disabled) {
      return <span style={{ opacity: '0.5' }}>{children}</span>
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
          (
            { label, link }: { label: string; link: string; icon: any },
            index: number
          ) => (
            <Item
              key={label}
              link={link}
              index={index}
              label={label}
              disabled={link === '/collection' && !token}
            />
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
