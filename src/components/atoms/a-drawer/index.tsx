import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@mui/material'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material'
import { useRouter } from 'next/router'
import { DrawerHeader, DrawerUI } from './style'
import { i18n } from '../../../shared/i18n'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../store/reducers'
import { CenterText } from '../a-text'
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
  const redirect = (link: string) => {
    push(link)
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
          ({ label, link }: { label: string; link: string }, index: number) => {
            const disabled = link === '/collection' && !token
            return (
              <Tooltip
                key={'navbar-drawer-' + index}
                title={open ? '' : label}
                placement="right"
              >
                <ListItem
                  button
                  onClick={() => {
                    if (!disabled) redirect(link)
                  }}
                  style={{
                    cursor: 'pointer',
                    opacity: !disabled ? '1' : '0.5'
                  }}
                  disabled={disabled}
                >
                  <ListItemIcon>{iconList[index]}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              </Tooltip>
            )
          }
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
