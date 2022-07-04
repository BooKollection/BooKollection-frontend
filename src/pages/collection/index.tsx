import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
  GET_USER_LITERARY_WORK_QUERY,
  MY_COLLECTION_QUERY
} from '../../graphql'
import { clientGraphql } from '../../graphql/client-graphql'
import { Collection } from '../../templates'

const MyCollection = () => {
  const [tabSelected, setTabSelected] = useState(0)
  const [collectionData, setCollectionData] = useState({
    totalLiteraryWorks: 0,
    totalVolumes: 0,
    collectionValue: 0,
    completeLiteraryWorks: 0,
    memberSince: null,
    literaryWorks: []
  })
  const { locale } = useRouter()

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }
  useEffect(() => {
    clientGraphql
      .mutate({
        mutation: GET_USER_LITERARY_WORK_QUERY,
        variables: {
          language: locale.replace('-', '')
        }
      })
      .then(literaryWork => {
        setCollectionData(literaryWork.data.getUserLiteraryWorks)
      })
  }, [])

  return (
    <Collection
      data={{
        tabSelected,
        ...collectionData,
        handleChange
      }}
    />
  )
}

export default MyCollection
