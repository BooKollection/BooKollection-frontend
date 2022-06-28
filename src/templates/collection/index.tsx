import { Tabs } from '@mui/material'
import { useRouter } from 'next/router'
import { BoxContainer, CustomTab } from '../../components/atoms'
import {
  MyCollectionDetails,
  MyCollectionEditions
} from '../../components/organisms'
import { StyledBox } from './style'
import { i18n } from '../../shared/i18n'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const Collection = ({ data }) => {
  const {
    tabSelected,
    literaryWorks,
    handleChange,
    totalLiteraryWorks,
    totalVolumes,
    collectionValue,
    completeLiteraryWorks,
    memberSince
  } = data
  const { locale } = useRouter()
  const { details, literaryWorksLabel } = i18n[locale]

  return (
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
  )
}

export { Collection }