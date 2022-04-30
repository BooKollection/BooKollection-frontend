import * as React from 'react'
import {
  MenuBook as MenuBookIcon,
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon
} from '@mui/icons-material'

export const navbarButtonTitles = {
  'pt-BR': {
    titles: [
      { label: 'Inicio', link: '/', icon: <HomeIcon color="primary" /> },
      {
        label: 'Sua coleção',
        link: '/collection',
        icon: <MenuBookIcon color="primary" />
      },
      {
        label: 'Obras literárias',
        link: '/literaryWorks',
        icon: <LibraryBooksIcon color="primary" />
      }
    ]
  },
  'en-US': {
    titles: [
      { label: 'home', link: '', icon: <HomeIcon color="primary" /> },
      {
        label: 'your Collection',
        link: '/collection',
        icon: <MenuBookIcon color="primary" />
      },
      {
        label: 'literary works',
        link: '/literaryWorks',
        icon: <LibraryBooksIcon color="primary" />
      }
    ]
  }
}
