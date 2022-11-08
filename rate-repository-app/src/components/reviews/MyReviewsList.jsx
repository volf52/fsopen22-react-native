import { useState, useRef } from "react"
import { FlatList } from "react-native"
import { useNavigate } from "react-router-native"

import Container from "../utils/Container"
import ItemSeperator from "../utils/ItemSeperator"
import DummyFooter from "../utils/DummyFooter"
import ReviewCard from "./ReviewCard"
import Text from "../utils/Text"
import DeleteConfirmation from "./DeleteConfirmation"

const MyReviewsList = ({ reviews, fetchMore, handleDelete, operating }) => {
  const navigate = useNavigate()
  const cancelRef = useRef(null)

  const [reviewToDelete, setReviewToDelete] = useState(null)

  if (!reviews) return null

  const reviewNodes = reviews.edges.map((edge) => edge.node)

  const onViewRepo = (id) => {
    navigate(`/repo/${id}`)
  }

  const onDeleteReview = (id) => {
    setReviewToDelete(id)
  }

  const onCancel = () => {
    setReviewToDelete(null)
  }

  const onConfirm = () => {
    handleDelete(reviewToDelete)
    setReviewToDelete(null)
  }

  return (
    <Container>
      <DeleteConfirmation
        visible={!!reviewToDelete && !operating}
        onCancel={onCancel}
        onConfirm={onConfirm}
        cancelRef={cancelRef}
      />
      <FlatList
        data={reviewNodes}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ReviewCard
            review={item}
            title={item.repositoryId}
            onViewRepo={() => onViewRepo(item.repositoryId)}
            onDeleteReview={() => onDeleteReview(item.id)}
            disabled={operating}
          />
        )}
        ItemSeparatorComponent={ItemSeperator}
        ListFooterComponent={DummyFooter}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Text>No reviews yet</Text>}
      />
    </Container>
  )
}

export default MyReviewsList
