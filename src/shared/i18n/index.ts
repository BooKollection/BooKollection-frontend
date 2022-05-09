import { PT_BR, EN_US } from '../constants'

export const i18n = {
  [PT_BR]: {
    edition: 'Edição',
    status: 'Status',
    publisher: 'Editora',
    totalVolumes: 'Total de volumes',
    format: 'Formato',
    author: 'Autor',
    ageGroup: 'Faixa Etária',
    bagShape: 'Formato saquinho',
    categories: 'Categorias',
    language: 'Linguagem',
    country: 'País de origem',
    synopsis: 'Sinopse',
    paperType: 'Tipo de papel',
    acquisitionDifficulty: 'Dificuldade de aquisição (Sua nota)',
    acquisitionDifficultyAverage: 'Dificuldade de aquisição (público)',
    price: 'Preço',
    releaseDate: 'Data de publicação',
    observations: 'Observações',
    createdAt: 'Criado em',
    updatedAt: 'Atualizado em',
    statusComplete: 'Completo',
    statusInProgress: 'Em andamento',
    details: 'Detalhes',
    volumes: 'Volumes',
    authorInformationLabel: 'Informações do autor',
    literaryWorkInformationLabel: 'Informações da obra literária',
    colletion: 'Coleção',
    paperTypeEnum: {
      newsPrint: 'Papel jornal',
      offset: 'Offset',
      chamois: 'Chamois',
      couche: 'Couché',
      pollen: 'Polén'
    },
    addToCollection: 'Adicionar a coleção',
    dimensions: 'Dimensões',
    readingAge: 'Classificação Etária',
    name: 'nome',
    gifts: 'Brindes',
    volume: 'Volume',
    number: 'Número',
    checkList: 'Check list',
    numberOfPages: 'Número de páginas',
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
    ],
    addVolumes: 'Volumes adicionados',
    literaryWorksAdd: 'Obras Adicionadas',
    search: 'Buscar',
    signIn: 'Entrar',
    cttVersion: 'Versão',
    buttonScrollVersion: 'Voltar para o topo'
  },
  [EN_US]: {
    edition: 'Edition',
    status: 'Status',
    publisher: 'Publisher',
    totalVolumes: 'Total volumes',
    format: 'Format',
    author: 'Author',
    ageGroup: 'Age group',
    bagShape: 'Bag shape',
    categories: 'Categories',
    language: 'Language',
    country: 'Country',
    synopsis: 'Synopsis',
    paperType: 'Paper Type',
    acquisitionDifficulty: 'Acquisition Difficulty (Your Rating)',
    acquisitionDifficultyAverage: 'Acquisition Difficulty (public)',
    price: 'Price',
    releaseDate: 'Release Date',
    observations: 'Observations',
    createdAt: 'Created At',
    updatedAt: 'Updated At',
    statusComplete: 'Complete',
    statusInProgress: 'In Progress',
    details: 'Details',
    volumes: 'Volumes',
    authorInformationLabel: 'Author Information',
    literaryWorkInformationLabel: 'Literary Work Information',
    colletion: 'Colletion',
    paperTypeEnum: {
      newsPrint: 'News Print',
      offset: 'Offset',
      chamois: 'Chamois',
      couche: 'CouchE',
      pollen: 'Pollen'
    },
    addToCollection: 'Add to collection',
    dimensions: 'Dimensions',
    readingAge: 'reading Age',
    name: 'name',
    volume: 'Volume',
    gifts: 'Gifts',
    number: 'Number',
    checkList: 'Check list',
    numberOfPages: 'Number of pages',
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
    ],
    addVolumes: 'Added Volumes',
    literaryWorksAdd: 'Added literary works',
    search: 'Search',
    signIn: 'Sign In',
    cttVersion: 'Version',
    buttonScrollVersion: 'Back to top'
  }
}
