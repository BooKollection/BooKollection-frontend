import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Homepage } from '../templates'
import { getAllLiteraryWork, getLastAddedVolumes } from '../rest'

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
        language: locale
      })

    if (!loaded) {
      Promise.all([
        getAllLiteraryWorks(),
        getLastAddedVolumes({
          language: locale
        })
      ])
        .then(([literaryWorks, getAllVolumes]) => {
          setVolumes(getAllVolumes.data)

          setEditions(literaryWorks.data)

          setLoaded(true)
        })
        .catch(() => {
          setEditions([])
          setVolumes([])
          setLoaded(true)
        })
    }
  }, [loaded, locale])

  return <Homepage editions={editions} volumes={volumes} />
}

export default Index
