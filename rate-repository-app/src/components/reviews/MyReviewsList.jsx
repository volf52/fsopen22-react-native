import { FlatList } from "react-native"

import Container from "../utils/Container"
import ItemSeperator from "../utils/ItemSeperator"
import DummyFooter from "../utils/DummyFooter"
import ReviewCard from "./ReviewCard"
import Text from "../utils/Text"

const MyReviewsList = ({ reviews, fetchMore }) => {
  if (!reviews) return null

  const reviewNodes = reviews.edges.map((edge) => edge.node)

  return (
    <Container>
      <FlatList
        data={reviewNodes}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ReviewCard review={item} title={item.repositoryId} />
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
