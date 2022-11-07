import { gql } from "@apollo/client"

export const SIGN_IN = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        id
        username
      }
      accessToken
    }
  }
`
