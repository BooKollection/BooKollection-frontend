import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Homepage } from '../templates'
import {
  getAllLiteraryWork,
  getAllUserVolume,
  getLastAddedVolumes
} from '../rest'
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
        .then(async ([literaryWorks, getAllVolumes]) => {
          let volumes = getAllVolumes.data
          const token = localStorage.getItem(process.env.tokenName)
          if (token !== null && token !== '') {
            const { data } = await getAllUserVolume({
              limit: 0,
              locale,
              offset: 0
            })
            const volumesIds = data.map(({ volume }) => volume)
            volumes = volumes.map(volume => ({
              ...volume,
              haveVolume: volumesIds.includes(volume.id)
            }))
          }

          setVolumes(volumes)
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
