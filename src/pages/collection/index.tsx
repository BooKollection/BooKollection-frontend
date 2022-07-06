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
  const [collectionData, setCollectionData] = useState(null)
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
      tabSelected={tabSelected}
      data={collectionData}
      handleChange={handleChange}
    />
  )
}

export default MyCollection
