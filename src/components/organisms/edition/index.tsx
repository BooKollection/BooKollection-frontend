import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from '@mui/material'
import { EditionDetails } from './details'
import { EditionVolume } from './volume'
import { CustomText } from '../../atoms/text'
import { i18n } from '../../../shared/i18n'
import { CustomTab } from '../../atoms/tabItem'
import { StyledBox, StyledBoxContainer } from './style'
import { editionMock, editionVolumesMock } from '../../../shared/mocks'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const Edition = ({ editionDetails }) => {
  const [tabSelected, setTabSelected] = useState(0)
  const [edition, setEdition] = useState(editionDetails)
  const [editionVolumes, setEditionVolumes] = useState([])
  const { locale, query } = useRouter()
  const { details, volumes } = i18n[locale]
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }

  return (
    edition && (
      <StyledBoxContainer padding={2}>
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
            width: '100%',
            height: '100%'
          }}
        >
          {tabSelected === 0 ? (
            <EditionDetails details={edition} />
          ) : (
            <EditionVolume data={editionVolumes} />
          )}
        </StyledBox>
      </StyledBoxContainer>
    )
  )
}

export { Edition }
