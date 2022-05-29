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
