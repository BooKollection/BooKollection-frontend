import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from '@mui/material'
import { MyCollectionDetails } from './details'
import { MyCollectionVolume } from './volume'
import { BoxContainer } from '../../components/atoms/boxContainer'
import { i18n } from '../../shared/i18n'
import { CustomTab } from '../../components/atoms/tabItem'
import { StyledBox } from './style'

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
      totalLiteraryWork,
      totalVolumes,
      collectionValue,
      completeLiteraryWork,
      memberSince,
      literaryWorks
    },
    setCollectionData
  ] = useState({
    totalLiteraryWork: 0,
    totalVolumes: 0,
    collectionValue: 0,
    completeLiteraryWork: 0,
    memberSince: null,
    literaryWorks: []
  })
  const { locale } = useRouter()
  const { details, volumes } = i18n[locale]
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }
  useEffect(() => {
    const response = {
      memberSince: new Date(),
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
          totalVolumes: 1,
          adquiredVolumes: 40,
          status: 'not complete',
          amountSpent: 24.9
        }
      ]
    }
    const newTotalLiteraryWork = response.literaryWorks.length
    const newTotalVolumes = response.literaryWorks.reduce(
      (acc, { totalVolumes }) => (acc = acc + totalVolumes),
      0
    )
    const newCollectionValue = response.literaryWorks.reduce(
      (acc, { amountSpent }) => (acc = acc + amountSpent),
      0
    )
    const newCompleteLiteraryWork = response.literaryWorks.reduce(
      (acc, { status }) => (status === 'complete' ? acc + 1 : acc),
      0
    )

    setCollectionData({
      ...response,
      totalLiteraryWork: newTotalLiteraryWork,
      totalVolumes: newTotalVolumes,
      collectionValue: newCollectionValue,
      completeLiteraryWork: newCompleteLiteraryWork
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
              label={volumes}
              {...a11yProps(1)}
            />
          </Tabs>
          <StyledBox>
            {tabSelected === 0 ? (
              <MyCollectionDetails
                details={{
                  totalLiteraryWork,
                  totalVolumes,
                  collectionValue,
                  completeLiteraryWork,
                  memberSince
                }}
              />
            ) : (
              <MyCollectionVolume data={literaryWorks} />
            )}
          </StyledBox>
        </BoxContainer>
      )}
    </>
  )
}

export default MyCollection
