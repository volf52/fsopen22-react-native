import Form from "../utils/Form"
import FormButton from "../utils/FormButton"
import FormikTextInput from "../utils/FormikTextInput"

const CreateReviewForm = ({ onSubmit, loading }) => {
  return (
    <Form>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline />

      <FormButton onPress={onSubmit} text="Create a review" loading={loading} />
    </Form>
  )
}

export default CreateReviewForm
