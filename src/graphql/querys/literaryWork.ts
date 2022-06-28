import { gql } from '@apollo/client'

export const GET_ALL_LITERARY_WORK_QUERY = gql`
  query getAllLiteraryWorks($offset: Int!, $limit: Int!, $language: Language!) {
    getAllLiteraryWorks(
      input: { offset: $offset, limit: $limit, language: $language }
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
    }
  }
`
