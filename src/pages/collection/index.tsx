import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
  GET_MY_COLLECTION_VOLUME_QUERY,
  GET_USER_LITERARY_WORK_QUERY
} from '../../graphql'
import { clientGraphql } from '../../graphql/client-graphql'
import { Collection } from '../../templates'
import { i18nFormatData } from '../../utils/formatData'

interface ICollectionData {
  totalLiteraryWorks: number
  totalVolumes: number
  collectionValue: string
  completeLiteraryWorks: number
  memberSince: Date
}
const MyCollection = () => {
  const [tabSelected, setTabSelected] = useState(0)
  const [collectionData, setCollectionData] = useState<ICollectionData>(null)
  const { locale } = useRouter()

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }
  useEffect(() => {
    Promise.all([
      clientGraphql.mutate({
        mutation: GET_USER_LITERARY_WORK_QUERY,
        variables: {
          language: locale.replace('-', '')
        }
      }),
      clientGraphql.mutate({
        mutation: GET_MY_COLLECTION_VOLUME_QUERY,
        variables: {
          coin: 'BRL'
        }
      })
    ]).then(([literaryWork, collectionVolume]) => {
      setCollectionData({
        ...literaryWork.data.getUserLiteraryWorks,
        collectionValue: i18nFormatData(
          collectionVolume.data.getCollectionValue,
          locale,
          'Price'
        )
      })
    })
  }, [locale])

  return (
    <Collection
      tabSelected={tabSelected}
      data={collectionData}
      handleChange={handleChange}
    />
  )
}

export default MyCollection
