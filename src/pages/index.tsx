import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { CardGrid } from '../components/molecules/cardItens'
import { CustomText } from '../components/atoms/text'
import { useRouter } from 'next/router'
import { i18n } from '../shared/i18n'
import { editionMock } from '../shared/mocks'

const BoxContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '100%',
  width: '100%',
  padding: '1em'
}))

const Index = () => {
  const { locale } = useRouter()
  const { addVolumes, literaryWorksAdd } = i18n[locale]
  return (
    <BoxContainer>
      <CustomText variant="h6">{addVolumes}</CustomText>
      <CardGrid isVolume itens={editionMock} />
      <CustomText variant="h6" marginTop="20px">
        {literaryWorksAdd}
      </CustomText>
      <CardGrid itens={editionMock} />
    </BoxContainer>
  )
}

export default Index
