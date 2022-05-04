import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { CardGrid } from '../components/molecules/cardItens'
import { CustomText } from '../components/atoms/text'
import { useRouter } from 'next/router'
import { homepageTitles } from '../shared/i18n'

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
    number: 1,
    editionId: ''
  },
  {
    id: '',
    name: 'Soul Eater',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41aVXhlE+4L._SX351_BO1,204,203,200_.jpg',
    edition: 'Perfect Edition',
    publisher: 'JBC',
    number: 1,
    editionId: ''
  },
  {
    id: '',
    name: 'One Piece',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51CG5TGY59L._SX322_BO1,204,203,200_.jpg',
    edition: '3 em 1',
    publisher: 'Panini',
    number: 1,
    editionId: ''
  }
]
const Index = () => {
  const { locale } = useRouter()
  const { addVolumes, literaryWorksAdd } = homepageTitles[locale]
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
