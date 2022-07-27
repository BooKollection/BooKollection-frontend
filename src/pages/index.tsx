import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { clientGraphql } from '../graphql/client-graphql'
import {
  GET_ALL_AUTHORS_QUERY,
  GET_ALL_LITERARY_WORK_QUERY,
  GET_ALL_VOLUMES_QUERY
} from '../graphql'
import { Homepage } from '../templates'

const Index = () => {
  const [editions, setEditions] = useState(null)
  const [volumes, setVolumes] = useState(null)
  const [authors, setAuthors] = useState(null)
  const { locale } = useRouter()

  const getAllLiteraryWorks = () => {
    clientGraphql
      .query({
        query: GET_ALL_LITERARY_WORK_QUERY,
        variables: {
          offset: 0,
          limit: 10,
          language: locale.replace('-', '')
        }
      })
      .then(res => setEditions(res.data.getAllLiteraryWorks))
  }
  const getAllAuthors = () => {
    clientGraphql
      .query({
        query: GET_ALL_AUTHORS_QUERY,
        variables: {
          offset: 0,
          limit: 10,
          language: locale.replace('-', '')
        }
      })
      .then(res => setAuthors(res.data.getAllAuthors))
  }
  const getAllVolumes = () => {
    clientGraphql
      .query({
        query: GET_ALL_VOLUMES_QUERY,
        variables: {
          offset: 0,
          limit: 10,
          language: locale.replace('-', ''),
          literaryWork: ''
        }
      })
      .then(res => setVolumes(res.data.getAllVolumes))
  }
  useEffect(() => {
    getAllLiteraryWorks()
    getAllVolumes()
    getAllAuthors()
  })

  const setVolumeEdition = () => {
    setVolumes(null)
    clientGraphql.cache.reset().then(() => {
      getAllVolumes()
    })
  }

  return (
    <Homepage
      authors={authors}
      editions={editions}
      volumes={volumes}
      setVolumeEdition={setVolumeEdition}
    />
  )
}

export default Index
