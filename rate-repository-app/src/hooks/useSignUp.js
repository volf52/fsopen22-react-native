import { useMutation } from "@apollo/client"
import { SIGN_UP } from "../graphql/mutations"

const useSignUp = () => {
  const [signUpMut, result] = useMutation(SIGN_UP)

  const signUp = async ({ username, password }) => {
    const { data } = await signUpMut({
      variables: {
        user: {
          username,
          password,
        },
      },
    })

    return data?.createUser
  }

  return { signUp, result }
}

export default useSignUp
