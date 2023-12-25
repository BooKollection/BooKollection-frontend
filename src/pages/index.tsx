import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { clientGraphql } from '../graphql/client-graphql'
import { Homepage } from '../templates'
import { getAllLiteraryWork } from '../rest'
import { GET_ALL_VOLUMES_QUERY } from '../graphql'

const Index = () => {
  const [editions, setEditions] = useState(null)
  const [volumes, setVolumes] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const { locale } = useRouter()

  useEffect(() => {
    const getAllLiteraryWorks = () =>
      getAllLiteraryWork({
        offset: 0,
        limit: 0,
        language: locale.replace('-', '')
      })

    const getAllVolumes = () =>
      clientGraphql.query({
        query: GET_ALL_VOLUMES_QUERY,
        variables: {
          offset: 0,
          limit: 0,
          language: locale.replace('-', ''),
          literaryWork: ''
        }
      })
    if (!loaded) {
      Promise.all([getAllLiteraryWorks(), getAllVolumes()]).then(
        ([literaryWorks, res2]) => {
          setEditions(literaryWorks.data)
          setVolumes(res2.data.getAllVolumes)
          setLoaded(true)
        }
      )
    }
  }, [loaded, locale])

  return <Homepage editions={editions} volumes={volumes} />
}

export default Index
