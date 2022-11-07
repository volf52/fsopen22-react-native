import { Formik } from "formik"
import * as yup from "yup"

import SignInForm from "./SignInForm"

const initialValues = {
  username: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 character")
    .max(30, "Username must be at most 30 characters")
    .required("Username is required"),

  password: yup
    .string()
    .min(3, "Password must be at least 3 characters")
    .max(50, "Password must be at most 50 characters")
    .required("Password is required"),
})

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignInContainer
