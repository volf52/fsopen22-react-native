import ReviewCard from "../reviews/ReviewCard"

const ReviewItem = ({ review }) => (
  <ReviewCard review={review} title={review.user.username} />
)

export default ReviewItem
