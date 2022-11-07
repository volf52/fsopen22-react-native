import { useApolloClient, useMutation } from "@apollo/client"

import { SIGN_IN } from "../graphql/mutations"
import useAuthStorage from "./useAuthStorage"

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    })

    const token = data?.authenticate.accessToken
    await authStorage.setAccessToken(token)

    await apolloClient.resetStore()

    return data
  }

  return { signIn, result }
}

export default useSignIn
