import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from '@mui/material'
import { EditionDetails } from './details'
import { EditionVolume } from './volume'
import { i18n } from '../../../shared/i18n'
import { CustomTab } from '../../atoms/a-tab-item'
import { StyledBox, StyledBoxContainer } from './style'
import { clientGraphql } from '../../../graphql/client-graphql'
import { GET_ALL_VOLUMES_QUERY } from '../../../graphql'
import { useDispatch } from 'react-redux'
import { snackbarUpdate } from '../../../store/actions/snackbar'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const Edition = ({ editionDetails }) => {
  const [tabSelected, setTabSelected] = useState(0)
  const [edition] = useState(editionDetails)
  const [editionVolumes, setEditionVolumes] = useState(null)
  const [getVolumes, setGetVolumes] = useState(false)
  const { locale } = useRouter()
  const { details, volumes } = i18n[locale]
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }
  const dispatch = useDispatch()
  const setVolumeEdition = volume => {
    const newEditionVolumes = editionVolumes.map(editionVolume => {
      if (volume.id === editionVolume.id) {
        return {
          ...editionVolume,
          purchasedPrice: volume.purchasedPrice,
          purchasedDate: volume.purchasedDate
        }
      }
      return editionVolume
    })
    setEditionVolumes(newEditionVolumes)
  }
  useEffect(() => {
    if (tabSelected === 1 && !getVolumes) {
      clientGraphql
        .query({
          query: GET_ALL_VOLUMES_QUERY,
          variables: {
            offset: 0,
            limit: 0,
            language: locale.replace('-', ''),
            literaryWork: editionDetails.id
          }
        })
        .then(res => {
          setEditionVolumes(res.data.getAllVolumes)
          setGetVolumes(true)
        })
        .catch(() => {
          dispatch(
            snackbarUpdate({
              open: true,
              message: i18n[locale].errorToGetVolumes,
              severity: 'error'
            })
          )
        })
    }
  }, [dispatch, editionDetails.id, getVolumes, locale, tabSelected])
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
            <EditionVolume
              setVolumeEdition={setVolumeEdition}
              data={editionVolumes}
            />
          )}
        </StyledBox>
      </StyledBoxContainer>
    )
  )
}

export { Edition }
