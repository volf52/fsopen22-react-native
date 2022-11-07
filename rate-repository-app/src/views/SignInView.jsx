import SignInContainer from "../components/signin/SignInContainer"
import useSignIn from "../hooks/useSignin"

const SignInView = () => {
  const { signIn } = useSignIn()

  const onSubmit = async ({ username, password }) => {
    try {
      const data = await signIn({ username, password })

      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  return <SignInContainer onSubmit={onSubmit} />
}

export default SignInView
