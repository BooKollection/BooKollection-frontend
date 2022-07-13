import { gql } from '@apollo/client'

export const GET_ALL_AUTHOR_LITERARY_WORK_QUERY = gql`
  query getAllAuthorLiteraryWorks(
    $offset: Int!
    $limit: Int!
    $language: Language!
    $author: String!
  ) {
    getAllAuthorLiteraryWorks(
      input: {
        offset: $offset
        limit: $limit
        language: $language
        author: $author
      }
    ) {
      id
      name
      createdAt
      updatedAt
      registeredBy
      updatedBy
      language
      synopsis
      country
      bagShape
      publisher
      dimensions
      imageUrl
      status
      categories
      edition
      type
      paperType
      ilustratorBy
      writterBy
      startOfPublication
      endOfPublication
      originalPublisher
      releaseFrequency
      acquisitionDifficulty
      classification
    }
  }
`
export const GET_ALL_AUTHORS_QUERY = gql`
  query getAllAuthors($offset: Int!, $limit: Int!) {
    getAllAuthors(input: { offset: $offset, limit: $limit }) {
      id
      name
      imageUrl
      createdAt
      updatedAt
      registeredBy
      updatedBy
    }
  }
`
