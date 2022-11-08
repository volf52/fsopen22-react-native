import { StyleSheet, View } from "react-native"
import { Button } from "native-base"

import Card from "../utils/Card"
import Text from "../utils/Text"

import theme from "../../utils/theme"
import { parseDate } from "../../utils/date"
import Divider from "../utils/Divider"

const ratingWidth = 44

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
  },
  card: {
    flexDirection: "column",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.primary,
    borderRadius: Math.floor(ratingWidth / 2),
    width: ratingWidth,
    height: ratingWidth,
    borderWidth: 2,
    marginRight: theme.separator,
  },
  test: {
    flex: 2,
  },
  rightContainer: {
    flexDirection: "column",
  },
  reviewContainer: {
    width: "90%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
})

const ReviewCard = ({
  review,
  title,
  onViewRepo,
  onDeleteReview,
  disabled,
}) => {
  const dateFormatted = parseDate(review.createdAt).format("DD.MM.YYYY")
  const showFooter = onViewRepo && onDeleteReview

  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        <View style={styles.ratingContainer}>
          <Text color="primary" fontSize="subheading" fontWeight="bold">
            {review.rating}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.text}>
            {title}
          </Text>

          {/* Created Date */}
          <Text color="textSecondary" style={styles.text}>
            {dateFormatted}
          </Text>
          <View style={styles.reviewContainer}>
            <Text style={styles.text}>{review.text}</Text>
          </View>
        </View>
      </View>

      {showFooter && (
        <>
          <Divider />
          <View style={styles.footer}>
            <Button
              onPress={onViewRepo}
              backgroundColor="primary.600"
              borderRadius={25}
              isDisabled={disabled}
            >
              View Repository
            </Button>
            <Button
              onPress={onDeleteReview}
              backgroundColor="red.600"
              borderRadius={25}
              isDisabled={disabled}
            >
              Delete Review
            </Button>
          </View>
        </>
      )}
    </Card>
  )
}

export default ReviewCard
