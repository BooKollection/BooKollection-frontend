import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { CardGrid } from '../components/organisms/cardItens'
import { CustomText } from '../components/atoms/text'
import { useRouter } from 'next/router'
import { i18n } from '../shared/i18n'
import { editionVolumesMock } from '../shared/mocks'
import { clientGraphql } from '../config/client-graphql'
import { GET_ALL_LITERARY_WORK_QUERY } from '../graphql'

const BoxContainer = styled(Box)(({}) => ({
  height: '100%',
  width: '100%',
  padding: '1em'
}))

const Index = () => {
  const { locale } = useRouter()
  const { addVolumes, literaryWorksAdd } = i18n[locale]
  const [editions, setEditions] = useState([])

  useEffect(() => {
    clientGraphql
      .query({
        query: GET_ALL_LITERARY_WORK_QUERY,
        variables: {
          offset: 0,
          limit: 0,
          language: locale.replace('-', '')
        }
      })
      .then(res => {
        setEditions(res.data.getAllLiteraryWorks)
      })
  }, [])
  return (
    <BoxContainer>
      <CustomText variant="h6" margin="15px 0px">
        {addVolumes}
      </CustomText>
      <CardGrid volumes={editionVolumesMock} />
      <CustomText variant="h6" margin="25px 0px 15px 0px">
        {literaryWorksAdd}
      </CustomText>
      <CardGrid editions={editions} />
    </BoxContainer>
  )
}

export default Index
