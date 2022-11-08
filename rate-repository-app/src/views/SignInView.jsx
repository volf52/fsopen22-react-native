import { Alert } from "react-native"
import { useNavigate } from "react-router-native"

import SignInContainer from "../components/signin/SignInContainer"
import useSignIn from "../hooks/useSignin"

const SignInView = () => {
  const { signIn, result } = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password })
      navigate("/")
    } catch (err) {
      console.log(err)
      Alert.alert("Login Error", err.message)
    }
  }

  return <SignInContainer onSubmit={onSubmit} loading={result.loading} />
}

export default SignInView
