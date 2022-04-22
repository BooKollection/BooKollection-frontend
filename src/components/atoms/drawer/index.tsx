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
import { buttonTitles } from '../../../shared/i18n/navbar'

export const drawerWidth = 180

export const Drawer = ({
  open,
  handleDrawerClose
}: {
  open: boolean
  handleDrawerClose
}) => {
  const theme = useTheme()
  const { locale } = useRouter()

  const { titles } = buttonTitles[locale]

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
      <ListDrawer>
        {titles.map(
          (
            {
              label,
              link,
              icon
            }: { label: string; link: string; icon: SvgIconComponent },
            index: number
          ) => (
            <Link key={'navbar' + index} href={link} locale={locale}>
              <ListItem>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
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
