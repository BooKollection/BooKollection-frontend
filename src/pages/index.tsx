import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Homepage } from '../templates'
import { getAllLiteraryWork, getLastAddedVolumes } from '../rest'
import { toast } from 'react-toastify'
import { errorMessages } from '../shared/i18n/errorServerMessage'

const Index = () => {
  const [editions, setEditions] = useState(null)
  const [volumes, setVolumes] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const { locale, query } = useRouter()

  useEffect(() => {
    if (!loaded) {
      if (query.error === 'login') {
        toast(errorMessages[locale].UNAUTORIZED, {
          type: 'error',
          closeOnClick: true
        })
      }
      Promise.all([
        getAllLiteraryWork({
          offset: 0,
          limit: 0,
          language: locale
        }),
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
  }, [loaded, locale, query])

  return <Homepage editions={editions} volumes={volumes} />
}

export default Index
