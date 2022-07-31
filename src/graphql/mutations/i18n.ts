import { gql } from '@apollo/client'

export const I18N_CREATE_MUTATION = gql`
  mutation createOrUpdateInternationalization(
    $language: Language!
    $synopsis: String!
    $volume: String!
  ) {
    createOrUpdateInternationalization(
      input: { language: $language, synopsis: $synopsis, volume: $volume }
    ) {
      id
      language
      synopsis
      createdAt
      updatedAt
    }
  }
`
export const I18N_UPDATE_MUTATION = gql`
  mutation createOrUpdateInternationalization(
    $language: Language!
    $synopsis: String!
    $volume: String!
  ) {
    createOrUpdateInternationalization(
      input: { language: $language, synopsis: $synopsis, volume: $volume }
    ) {
      id
      language
      synopsis
      createdAt
      updatedAt
    }
  }
`
