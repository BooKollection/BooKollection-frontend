import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { CardGrid } from '../components/molecules/cardItens'
import { CustomText } from '../components/atoms/text'
import { useRouter } from 'next/router'
import { i18n } from '../shared/i18n'
import { editionMock, editionVolumesMock } from '../shared/mocks'

const BoxContainer = styled(Box)(({}) => ({
  height: '100%',
  width: '100%',
  padding: '1em'
}))

const Index = () => {
  const { locale } = useRouter()
  const { addVolumes, literaryWorksAdd } = i18n[locale]
  return (
    <BoxContainer>
      <CustomText variant="h6" margin="15px 0px">
        {addVolumes}
      </CustomText>
      <CardGrid volumes={editionVolumesMock} />
      <CustomText variant="h6" margin="25px 0px 15px 0px">
        {literaryWorksAdd}
      </CustomText>
      <CardGrid editions={editionMock} />
    </BoxContainer>
  )
}

export default Index
