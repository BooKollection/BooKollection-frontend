import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { clientGraphql } from '../graphql/client-graphql'
import { GET_ALL_LITERARY_WORK_QUERY, GET_ALL_VOLUMES_QUERY } from '../graphql'
import { Homepage } from '../templates'
import { VolumeType } from '../components/molecules'

const Index = () => {
  const [editions, setEditions] = useState([])
  const [volumes, setVolumes] = useState([])

  const { locale } = useRouter()

  const getAllLiteraryWorks = () =>
    clientGraphql.query({
      query: GET_ALL_LITERARY_WORK_QUERY,
      variables: {
        offset: 0,
        limit: 0,
        language: locale.replace('-', '')
      }
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

  useEffect(() => {
    Promise.all([getAllLiteraryWorks(), getAllVolumes()]).then(
      ([res, res2]) => {
        setEditions(res.data.getAllLiteraryWorks)
        setVolumes(
          res2.data.getAllVolumes.map((volume: VolumeType) => {
            let coverPrice = String(Number(volume.coverPrice).toFixed(2))
            if (locale === 'pt-BR') {
              coverPrice = coverPrice.replace('.', ',')
            }
            return {
              ...volume,
              coverPrice: coverPrice + ' ' + volume.coverPriceUnit
            }
          })
        )
      }
    )
  }, [])

  return <Homepage editions={editions} volumes={volumes} />
}

export default Index
