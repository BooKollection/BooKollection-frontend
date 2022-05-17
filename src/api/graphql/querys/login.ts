import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation loginUser(
    $reqEmail: String!
    $reqGoogleId: String!
    $reqTokenId: String!
  ) {
    loginUser(
      input: {
        reqEmail: $reqEmail
        reqGoogleId: $reqGoogleId
        reqTokenId: $reqTokenId
      }
    ) {
      token
      roles
    }
  }
`
