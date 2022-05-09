import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { CardGrid } from '../components/molecules/cardItens'
import { CustomText } from '../components/atoms/text'
import { useRouter } from 'next/router'
import { i18n } from '../shared/i18n'

const BoxContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '100%',
  width: '100%',
  padding: '1em'
}))

const mock = [
  {
    id: '',
    name: 'bleach',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51ZGgDM2q+L._SX631_BO1,204,203,200_.jpg',
    edition: 'Remix',
    publisher: 'Panini',
    synopsis:
      'Ichigo Kurosaki, 15 anos. Ocupação: Colegial. E então... O ataque violento de um espírito maligno chamado "Hollow" faz suas irmãs caírem uma após a outra... A única forma de salvá-las é se tornar um Shinigami e lutar! Diante da morte iminente, o colegial Ichigo Kurosaki precisará tomar uma decisão que poderá mudar seu destino...!!',
    number: 1,
    editionId: '',
    releaseDate: '13/05/2022',
    acquisitionDifficulty: 5,
    acquisitionDifficultyAverage: 5,
    language: 'PT-BR',
    numberOfPages: 552,
    bagShape: '15 x 25 cm',
    checkList: 'maio/2022',
    readingAge: '12+',
    isbn10: 'xxxxxxxxxxxxxxxx',
    isbn13: 'xxxxxxxxxxxxxxxx',
    author: 'xxxxxx',
    gifts: 'xxxxx'
  },
  {
    id: '',
    name: 'Soul Eater',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41aVXhlE+4L._SX351_BO1,204,203,200_.jpg',
    edition: 'Perfect Edition',
    synopsis: '',
    publisher: 'JBC',
    number: 1,
    editionId: '',
    releaseDate: '',
    acquisitionDifficulty: 5,
    acquisitionDifficultyAverage: 5,
    language: 'PT-BR',
    numberOfPages: 200,
    bagShape: '15 x 25 cm',
    checkList: 'maio/2022',
    readingAge: '12+',
    isbn10: 'xxxxxxxxxxxxxxxx',
    isbn13: 'xxxxxxxxxxxxxxxx',
    author: 'xxxxxx',
    gifts: 'xxxxx'
  },
  {
    id: '',
    name: 'One Piece',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51CG5TGY59L._SX322_BO1,204,203,200_.jpg',
    edition: '3 em 1',
    synopsis: '',
    publisher: 'Panini',
    number: 1,
    editionId: '',
    releaseDate: '',
    acquisitionDifficulty: 5,
    acquisitionDifficultyAverage: 5,
    language: 'PT-BR',
    checkList: 'maio/2022',
    numberOfPages: 200,
    bagShape: '15 x 25 cm',
    dimensions: '13.7 x 15.3 x 20 cm',
    readingAge: '12+',
    isbn10: 'xxxxxxxxxxxxxxxx',
    isbn13: 'xxxxxxxxxxxxxxxx',
    author: 'xxxxxx',
    gifts: 'xxxxx'
  }
]
const Index = () => {
  const { locale } = useRouter()
  const { addVolumes, literaryWorksAdd } = i18n[locale]
  return (
    <BoxContainer>
      <CustomText variant="h6">{addVolumes}</CustomText>
      <CardGrid isVolume itens={mock} />
      <CustomText variant="h6">{literaryWorksAdd}</CustomText>
      <CardGrid itens={mock} />
    </BoxContainer>
  )
}

export default Index
