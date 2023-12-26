import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { clientGraphql } from '../graphql/client-graphql'
import { Homepage } from '../templates'
import { getAllLiteraryWork, getLastAddedVolumes } from '../rest'
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

    if (!loaded) {
      Promise.all([
        getAllLiteraryWorks(),
        getLastAddedVolumes({
          language: locale.replace('-', '')
        })
      ]).then(([literaryWorks, getAllVolumes]) => {
        setEditions(literaryWorks.data)
        setVolumes(getAllVolumes.data)
        setLoaded(true)
      })
    }
  }, [loaded, locale])

  return <Homepage editions={editions} volumes={volumes} />
}

export default Index
