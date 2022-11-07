import SignInContainer from "../components/signin/SignInContainer"

const SignInView = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return <SignInContainer onSubmit={onSubmit} />
}

export default SignInView
