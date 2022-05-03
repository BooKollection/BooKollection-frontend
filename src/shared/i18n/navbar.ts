import { PT_BR, EN_US } from '../constants'

export const navbarButtonTitles = {
  [PT_BR]: {
    titles: [
      { label: 'Inicio', link: '/' },
      {
        label: 'Sua coleção',
        link: '/collection'
      },
      {
        label: 'Obras literárias',
        link: '/literaryWorks'
      }
    ]
  },
  [EN_US]: {
    titles: [
      { label: 'home', link: '/' },
      {
        label: 'your Collection',
        link: '/collection'
      },
      {
        label: 'literary works',
        link: '/literaryWorks'
      }
    ]
  }
}
