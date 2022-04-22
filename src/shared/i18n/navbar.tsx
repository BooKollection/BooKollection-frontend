import * as React from 'react'
import {
  MenuBook as MenuBookIcon,
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon,
  SvgIconComponent
} from '@mui/icons-material'

export const buttonTitles = {
  'pt-BR': {
    titles: [
      { label: 'Inicio', link: '', icon: <HomeIcon color="primary" /> },
      {
        label: 'Sua coleção',
        link: '',
        icon: <MenuBookIcon color="primary" />
      },
      {
        label: 'Obras literárias',
        link: '',
        icon: <LibraryBooksIcon color="primary" />
      }
    ]
  },
  'en-US': {
    titles: [
      { label: 'home', link: '', icon: <HomeIcon color="primary" /> },
      {
        label: 'your Collection',
        link: '',
        icon: <MenuBookIcon color="primary" />
      },
      {
        label: 'literary works',
        link: '',
        icon: <LibraryBooksIcon color="primary" />
      }
    ]
  }
}
