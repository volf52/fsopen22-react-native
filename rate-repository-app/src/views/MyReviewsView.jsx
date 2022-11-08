import useMyReviews from "../hooks/useMyReviews"

import MyReviewsList from "../components/reviews/MyReviewsList"
import Container from "../components/utils/Container"

const MyReviewsView = () => {
  const { reviews, fetchMore } = useMyReviews({ first: 8 })

  return (
    <Container>
      <MyReviewsList reviews={reviews} fetchMore={fetchMore} />
    </Container>
  )
}

export default MyReviewsView
