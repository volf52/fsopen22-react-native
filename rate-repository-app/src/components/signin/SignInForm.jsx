import FormikTextInput from "../utils/FormikTextInput"
import Form from "../utils/Form"

import FormButton from "../utils/FormButton"

const SignInForm = ({ onSubmit, loading }) => {
  return (
    <Form>
      <FormikTextInput
        name="username"
        placeholder="Username"
        testID="usernameField"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        testID="passwordField"
      />
      <FormButton
        onPress={onSubmit}
        text="Sign in"
        testID="submitButton"
        loading={loading}
      />
    </Form>
  )
}

export default SignInForm
