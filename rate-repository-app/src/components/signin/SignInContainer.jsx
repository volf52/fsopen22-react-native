import { Formik } from "formik"

import SignInForm from "./SignInForm"

const initialValues = {
  username: "",
  password: "",
}

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignInContainer
