import { Formik } from "formik"
import * as yup from "yup"

import SignUpForm from "./SignUpForm"

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Username must be at least 1 character")
    .max(30, "Username must be at most 30 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must be at most 50 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
})

const SignUpContainer = ({ onSubmit, loading }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <SignUpForm onSubmit={handleSubmit} loading={loading} />
      )}
    </Formik>
  )
}

export default SignUpContainer
