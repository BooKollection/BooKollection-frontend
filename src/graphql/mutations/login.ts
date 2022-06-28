import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation loginUser($reqTokenId: String!) {
    loginUser(input: { reqTokenId: $reqTokenId }) {
      token
      role
      name
    }
  }
`
