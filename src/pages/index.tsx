import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { CardGrid } from '../components/molecules/cardItens'
import { CustomText } from '../components/atoms/text'

const BoxContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '100%',
  width: '100%',
  padding: '1em'
}))

const mock = [
  {
    name: 'bleach',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/51ZGgDM2q+L._SX631_BO1,204,203,200_.jpg',
    edition: 'Remix',
    publisher: 'Panini',
    number: 1
  },
  {
    name: 'Soul Eater',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/41aVXhlE+4L._SX351_BO1,204,203,200_.jpg',
    edition: 'Perfect Edition',
    publisher: 'JBC',
    number: 1
  },
  {
    name: 'One Piece',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/51CG5TGY59L._SX322_BO1,204,203,200_.jpg',
    edition: '3 em 1',
    publisher: 'Panini',
    number: 1
  }
]
function index() {
  return (
    <BoxContainer>
      <CustomText variant="h6">Volumes adicionados</CustomText>
      <CardGrid isVolume itens={mock} />
      <CustomText variant="h6">Obras Adicionadas</CustomText>
      <CardGrid itens={mock} />
    </BoxContainer>
  )
}

export default index
