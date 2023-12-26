import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Collection } from '../../templates'
import { i18nFormatData } from '../../utils/formatData'
import { getAllUserLiteraryWork, getCollectionValue } from '../../rest'

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
      getAllUserLiteraryWork({
        language: locale
      }),
      getCollectionValue({
        coin: 'BRL',
        locale
      })
    ]).then(([literaryWork, collectionVolume]) => {
      setCollectionData({
        ...literaryWork.data,
        collectionValue: i18nFormatData(collectionVolume.data, locale, 'Price')
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
