import { gql } from '@apollo/client'

export const GET_USER_LITERARY_WORK_QUERY = gql`
  query getUserLiteraryWorks($language: Language!) {
    getUserLiteraryWorks(language: $language) {
      totalLiteraryWorks
      completeLiteraryWorks
      totalVolumes
      memberSince
      literaryWorks {
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
        adquiredVolumes
        totalVolumes
      }
    }
  }
`
