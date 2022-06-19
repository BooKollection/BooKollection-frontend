import React, { useEffect, useState } from 'react'
import { MY_COLLECTION_QUERY } from '../../graphql'
import { clientGraphql } from '../../config/client-graphql'
import { Collection } from '../../templates'

const MyCollection = () => {
  const [tabSelected, setTabSelected] = useState(0)
  const [
    {
      totalLiteraryWorks,
      totalVolumes,
      collectionValue,
      completeLiteraryWorks,
      memberSince,
      literaryWorks
    },
    setCollectionData
  ] = useState({
    totalLiteraryWorks: 0,
    totalVolumes: 0,
    collectionValue: 0,
    completeLiteraryWorks: 0,
    memberSince: null,
    literaryWorks: []
  })

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue)
  }
  useEffect(() => {
    const response = {
      memberSince: String(new Date()),
      literaryWorks: [
        {
          id: '',
          name: 'bleach',
          imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51ZGgDM2q+L._SX631_BO1,204,203,200_.jpg',
          edition: 'Remix',
          publisher: 'Panini',
          totalVolumes: 1,
          adquiredVolumes: 1,
          status: 'Complete',
          amountSpent: 59.9
        },
        {
          id: '',
          name: 'Berserk',
          imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/5191HKIfUPL._SX341_BO1,204,203,200_.jpg',
          edition: 'Deluxe',
          publisher: 'Panini',
          totalVolumes: 41,
          adquiredVolumes: 40,
          status: 'InProgress',
          amountSpent: 24.9
        }
      ]
    }

    clientGraphql
      .mutate({
        mutation: MY_COLLECTION_QUERY
      })
      .then(res => {
        setCollectionData({
          ...response,
          ...res.data.myCollection,
          memberSince: res.data.myCollection.createdAt
        })
      })
  }, [])
  return (
    <Collection
      data={{
        tabSelected,
        literaryWorks,
        handleChange,
        totalLiteraryWorks,
        totalVolumes,
        collectionValue,
        completeLiteraryWorks,
        memberSince
      }}
    />
  )
}

export default MyCollection
