import Form from "../utils/Form"
import FormButton from "../utils/FormButton"
import FormikTextInput from "../utils/FormikTextInput"

const SignUpForm = ({ onSubmit, loading }) => {
  return (
    <Form>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <FormikTextInput name="confirmPassword" placeholder="Confirm Password" />

      <FormButton onPress={onSubmit} text="Sign Up" loading={loading} />
    </Form>
  )
}

export default SignUpForm
