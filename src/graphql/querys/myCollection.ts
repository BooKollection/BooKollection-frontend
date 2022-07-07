import { gql } from '@apollo/client'

export const MY_COLLECTION_QUERY = gql`
  query myCollection {
    myCollection {
      id
      totalLiteraryWorks
      completeLiteraryWorks
      collectionValue
      createdAt
      updatedAt
    }
  }
`

export const GET_MY_COLLECTION_VOLUME_QUERY = gql`
  query getCollectionValue($coin: Coin!) {
    getCollectionValue(coin: $coin)
  }
`
