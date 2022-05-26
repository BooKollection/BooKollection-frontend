import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from '@mui/material'
import { MyCollectionDetails } from './details'
import { MyCollectionEditions } from './literaryWork'
import { BoxContainer } from '../../components/atoms/boxContainer'
import { i18n } from '../../shared/i18n'
import { CustomTab } from '../../components/atoms/tabItem'
import { StyledBox } from './style'
import { MY_COLLECTION_QUERY } from '../../graphql'
import { clientGraphql } from '../../config/client-graphql'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}
const MyCollection = () => {
  const [tabSelected, setTabSelected] = useState(0)
  const [
    {
      totalLiteraryWorks,
      totalVolumes,
      collectionValue,
      completeLiteraryWorks,
      memberSince,
      literaryWorks
    },
    setCollectionData
  ] = useState({
    totalLiteraryWorks: 0,
    totalVolumes: 0,
    collectionValue: 0,
    completeLiteraryWorks: 0,
    memberSince: null,
    literaryWorks: []
  })
  const { locale } = useRouter()
  const { details, literaryWorksLabel } = i18n[locale]
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }
  useEffect(() => {
    const response = {
      memberSince: String(new Date()),
      literaryWorks: [
        {
          id: '',
          name: 'bleach',
          imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51ZGgDM2q+L._SX631_BO1,204,203,200_.jpg',
          edition: 'Remix',
          publisher: 'Panini',
          totalVolumes: 1,
          adquiredVolumes: 1,
          status: 'Complete',
          amountSpent: 59.9
        },
        {
          id: '',
          name: 'Berserk',
          imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/5191HKIfUPL._SX341_BO1,204,203,200_.jpg',
          edition: 'Deluxe',
          publisher: 'Panini',
          totalVolumes: 41,
          adquiredVolumes: 40,
          status: 'InProgress',
          amountSpent: 24.9
        }
      ]
    }
    clientGraphql
      .mutate({
        mutation: MY_COLLECTION_QUERY
      })
      .then(res => {

        setCollectionData({
          ...response,
          ...res.data.myCollection,
          memberSince: res.data.myCollection.createdAt
        })
      })
  }, [])
  return (
    <>
      {memberSince && (
        <BoxContainer padding={2}>
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
              label={literaryWorksLabel}
              {...a11yProps(1)}
            />
          </Tabs>
          <StyledBox padding={3}>
            {tabSelected === 0 ? (
              <MyCollectionDetails
                details={{
                  totalLiteraryWorks,
                  totalVolumes,
                  collectionValue,
                  completeLiteraryWorks,
                  memberSince
                }}
              />
            ) : (
              <MyCollectionEditions data={literaryWorks} />
            )}
          </StyledBox>
        </BoxContainer>
      )}
    </>
  )
}

export default MyCollection
