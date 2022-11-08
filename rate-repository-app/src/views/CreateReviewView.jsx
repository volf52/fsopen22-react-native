import { Alert } from "react-native"
import { useNavigate } from "react-router-native"

import useCreateReview from "../hooks/useCreateReview"

import CreateReviewContainer from "../components/createReview/CreateReviewContainer"

const CreateReviewView = () => {
  const { createReview, result } = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      const repoId = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      })

      navigate(`/repo/${repoId}`)
    } catch (err) {
      console.log("error", err.message)
      Alert.alert("Error", err.message)
    }
  }

  return <CreateReviewContainer onSubmit={onSubmit} loading={result.loading} />
}

export default CreateReviewView
