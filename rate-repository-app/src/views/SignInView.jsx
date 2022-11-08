import { Alert } from "react-native"
import { useNavigate } from "react-router-native"

import SignInContainer from "../components/signin/SignInContainer"
import useSignIn from "../hooks/useSignin"

const SignInView = () => {
  const { signIn, result } = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async ({ username, password }) => {
    try {
      const data = await signIn({ username, password })

      console.log(data)
      navigate("/")
    } catch (err) {
      console.error(err)
      Alert.alert("Error", err.message)
    }
  }

  return <SignInContainer onSubmit={onSubmit} loading={result.loading} />
}

export default SignInView
