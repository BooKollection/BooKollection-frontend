import { gql } from '@apollo/client'

export const GET_ALL_LITERARY_WORK_QUERY = gql`
  query getAllLiteraryWorks($offset: Int!, $limit: Int!, $language: Language!) {
    getAllLiteraryWorks(
      input: { offset: $offset, limit: $limit, language: $language }
    ) {
      id
      name
      edition
      paperType
      type
      status
      categories
      imageUrl
      publisher
      bagShape
      country
      createdAt
      updatedAt
      registeredBy
      updatedBy
    }
  }
`
