import { Alert } from "react-native"
import { useNavigate } from "react-router-native"

import useSignUp from "../hooks/useSignUp"

import SignUpContainer from "../components/signUp/SignUpContainer"

const SignUpView = () => {
  const { signUp, result } = useSignUp()
  const navigate = useNavigate()

  const onSubmit = async ({ username, password }) => {
    try {
      await signUp({ username, password })

      navigate("/login")
    } catch (err) {
      console.log(err)
      Alert.alert("Error", err.message)
    }
  }

  return <SignUpContainer onSubmit={onSubmit} loading={result.loading} />
}

export default SignUpView
