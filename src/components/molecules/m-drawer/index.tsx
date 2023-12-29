import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Divider,
  IconButton} from '@mui/material'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material'
import { useRouter } from 'next/router'
import { DrawerHeader, DrawerUI } from './style'
import { i18n } from '../../../shared/i18n'
import { CenterText } from '../../atoms/a-text'
import {
  MenuBook as MenuBookIcon,
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon
} from '@mui/icons-material'
import { DrawerList } from '../../atoms'
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
  const {
    titles,
    cttVersion
  }: { titles: { label: string; link: string }[]; cttVersion: string } =
    i18n[locale]
  const iconList = [
    <HomeIcon
      key="iconList1"
      color="primary"
      sx={{
        fill: theme.palette.primary.contrastText
      }}
    />,
    <MenuBookIcon
      key="iconList2"
      color="primary"
      sx={{
        fill: theme.palette.primary.contrastText
      }}
    />,
    <LibraryBooksIcon
      key="iconList2"
      color="primary"
      sx={{
        fill: theme.palette.primary.contrastText
      }}
    />
  ]

  return (
    <DrawerUI variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon
              sx={{
                fill: theme.palette.primary.contrastText
              }}
            />
          ) : (
            <ChevronLeftIcon
              sx={{
                fill: theme.palette.primary.contrastText
              }}
            />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerList titles={titles} iconList={iconList} open={open} />
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
