import useMyReviews from "../hooks/useMyReviews"

import MyReviewsList from "../components/reviews/MyReviewsList"
import Container from "../components/utils/Container"
import useDeleteReview from "../hooks/useDeleteReview"

const MyReviewsView = () => {
  const {
    reviews,
    fetchMore,
    refetch: refetchReviews,
    loading: fetchingReviews,
  } = useMyReviews({ first: 4 })

  const {
    deleteReview,
    result: { loading: deleting },
  } = useDeleteReview()

  const handleDelete = async (id) => {
    console.log("delete", id)
    await deleteReview(id)
    await refetchReviews()
  }

  const operating = fetchingReviews || deleting

  return (
    <Container>
      <MyReviewsList
        reviews={reviews}
        fetchMore={fetchMore}
        handleDelete={handleDelete}
        operating={operating}
      />
    </Container>
  )
}

export default MyReviewsView
