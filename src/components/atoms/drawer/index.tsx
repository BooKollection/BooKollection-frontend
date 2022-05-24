import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  SvgIconComponent
} from '@mui/icons-material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { DrawerHeader, DrawerUI, ListDrawer } from './style'
import { i18n } from '../../../shared/i18n'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../store/reducers'

export const drawerWidth = 200

export const Drawer = ({
  open,
  handleDrawerClose
}: {
  open: boolean
  handleDrawerClose
}) => {
  const theme = useTheme()
  const { locale } = useRouter()
  const { token } = useSelector((state: IRootState) => state.user)
  const { titles } = i18n[locale]
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
      <ListDrawer style={{ height: '100%' }}>
        {titles.map(
          (
            {
              label,
              link,
              icon
            }: { label: string; link: string; icon: SvgIconComponent },
            index: number
          ) => (
            <Item
              index={index}
              link={link}
              icon={icon}
              label={label}
              disabled={link === '/collection' && !token}
            />
          )
        )}
      </ListDrawer>
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
