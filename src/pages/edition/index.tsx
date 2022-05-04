import React, { useState } from 'react'
import { EditionDetails } from './details'
import { EditionVolume } from './volume'
import { BoxContainer } from '../../components/atoms/boxContainer'
import { CustomText } from '../../components/atoms/text'
import { Tabs } from '@mui/material'
import { editionTitles } from '../../shared/i18n'
import { useRouter } from 'next/router'
import { CustomTab } from '../../components/atoms/tabItem'
import { StyledBox } from './style'

const mock = {
  id: '',
  name: 'One piece',
  details: {
    edition: 'Luxo',
    status: 'Em andamento',
    publisher: 'Panini',
    totalVolumes: '102',
    format: '15x25',
    author: 'Echiro Oda',
    ageGroup: '12+',
    bagShape: '15x25',
    language: 'PT-BR',
    country: 'Japonesa',
    paperType: 'Jornal',
    categories: 'Ação, Aventura, Sobrenatural',
    synopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet ligula cursus, ullamcorper ex id, ornare dui.'
  },
  volumes: [
    {
      id: '',
      name: 'one piece',
      imageUrl: 'https://m.media-amazon.com/images/I/51W1ij6OH3L.jpg',
      publisher: 'Panini',
      number: 1,
      owned: true
    },
    {
      id: '',
      name: 'one piece',
      imageUrl: 'https://m.media-amazon.com/images/I/51YYphO2LLL.jpg',
      publisher: 'Panini',
      number: 2,
      owned: true
    },
    {
      id: '',
      name: 'one piece',
      imageUrl: 'https://m.media-amazon.com/images/I/51IX7sqtQPL.jpg',
      publisher: 'Panini',
      number: 3,
      owned: true
    },
    {
      id: '',
      name: 'one piece',
      imageUrl: 'https://m.media-amazon.com/images/I/51+238nhs9L._SY346_.jpg',
      publisher: 'Panini',
      number: 4,
      owned: false
    }
  ]
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}
const Edition = () => {
  const [tabSelected, setTabSelected] = useState(0)
  const { locale } = useRouter()
  const { details, volumes } = editionTitles[locale]
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }

  return (
    <BoxContainer>
      <CustomText variant="h6" marginRight={2} marginBottom={2}>
        {mock.name}
      </CustomText>
      <Tabs
        value={tabSelected}
        style={{ marginLeft: '0.6em' }}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: 'transparent'
          }
        }}
      >
        <CustomTab
          isSelected={tabSelected === 0}
          label={details}
          {...a11yProps(0)}
        />
        <CustomTab
          isSelected={tabSelected === 1}
          label={volumes}
          {...a11yProps(1)}
        />
      </Tabs>
      <StyledBox
        sx={{ border: 2, borderColor: 'primary.light', width: '100%' }}
      >
        {tabSelected === 0 ? (
          <EditionDetails details={mock.details} />
        ) : (
          <EditionVolume data={mock.volumes} />
        )}
      </StyledBox>
    </BoxContainer>
  )
}

export default Edition
