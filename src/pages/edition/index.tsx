import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from '@mui/material'
import { EditionDetails } from './details'
import { EditionVolume } from './volume'
import { BoxContainer } from '../../components/atoms/boxContainer'
import { CustomText } from '../../components/atoms/text'
import { i18n } from '../../shared/i18n'
import { CustomTab } from '../../components/atoms/tabItem'
import { StyledBox } from './style'
import { editionMock } from '../../shared/mocks'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}
const getEdition = (id: string | string[]) =>
  editionMock.filter(edition => edition.id === id)[0]

const Edition = () => {
  const [tabSelected, setTabSelected] = useState(0)
  const [edition, setEdition] = useState(null)
  const { locale, query } = useRouter()
  const { details, volumes } = i18n[locale]
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }
  useEffect(() => {
    setEdition(getEdition(query.id))
  }, [])
  return (
    edition && (
      <BoxContainer padding={2}>
        <CustomText variant="h6" marginRight={2} marginBottom={2}>
          {edition.name}
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
          sx={{
            border: 2,
            borderColor: 'primary.light',
            width: '100%',
            height: '100%'
          }}
        >
          {tabSelected === 0 ? (
            <EditionDetails details={edition} />
          ) : (
            <EditionVolume data={edition.volumes} />
          )}
        </StyledBox>
      </BoxContainer>
    )
  )
}

export default Edition
