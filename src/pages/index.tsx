import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { editionVolumesMock } from '../shared/mocks'
import { clientGraphql } from '../config/client-graphql'
import { GET_ALL_LITERARY_WORK_QUERY } from '../graphql'
import { Homepage } from '../templates'

const Index = () => {
  const [editions, setEditions] = useState([])
  const { locale } = useRouter()

  useEffect(() => {
    clientGraphql
      .query({
        query: GET_ALL_LITERARY_WORK_QUERY,
        variables: {
          offset: 0,
          limit: 0,
          language: locale.replace('-', '')
        }
      })
      .then(res => {
        setEditions(res.data.getAllLiteraryWorks)
      })
  }, [])
  return <Homepage editions={editions} volumes={editionVolumesMock} />
}

export default Index
