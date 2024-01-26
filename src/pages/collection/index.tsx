import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Collection } from '../../templates'
import { i18nFormatData } from '../../utils/formatData'
import { getAllUserLiteraryWork, getCollectionValue } from '../../rest'

interface ICollectionData {
  totalLiteraryWorks: number
  literaryWorks: unknown[]
  totalVolumes: number
  collectionValue: string
  completeLiteraryWorks: number
  memberSince: Date
}
const MyCollection = () => {
  const [collectionData, setCollectionData] = useState<ICollectionData>({
    literaryWorks: [],
    totalVolumes: 0,
    completeLiteraryWorks: 0,
    totalLiteraryWorks: 0,
    memberSince: null,
    collectionValue: '0'
  })
  const { locale } = useRouter()

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

  return <Collection data={collectionData} />
}

export default MyCollection
