import { gql } from '@apollo/client'

export const GET_ALL_VOLUMES_QUERY = gql`
  query getAllVolumes(
    $offset: Int!
    $limit: Int!
    $language: Language!
    $literaryWork: String!
  ) {
    getAllVolumes(
      input: {
        offset: $offset
        limit: $limit
        language: $language
        literaryWork: $literaryWork
      }
    ) {
      id
      name
      synopsis
      language
      coverPriceUnit
      coverPrice
      number
      imageUrl
      publication
      paperType
      type
      dimensions
      edition
      country
      categories
      haveVolume
      purchasedDate
      purchasedPrice
    }
  }
`
