import { Formik } from "formik"
import * as yup from "yup"

import CreateReviewForm from "./CreateReviewForm"

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0, "Rating must be at least 0")
    .max(100, "Rating must be at most 100")
    .required("Rating is required"),
  text: yup.string().optional(),
})

const CreateReviewContainer = ({ onSubmit, loading }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <CreateReviewForm onSubmit={handleSubmit} loading={loading} />
      )}
    </Formik>
  )
}

export default CreateReviewContainer
