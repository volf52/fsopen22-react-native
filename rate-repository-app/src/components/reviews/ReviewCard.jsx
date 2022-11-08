import { StyleSheet, View } from "react-native"

import Card from "../utils/Card"
import Text from "../utils/Text"

import theme from "../../utils/theme"
import { parseDate } from "../../utils/date"

const ratingWidth = 44

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
  text: {
    marginVertical: 2,
  },
  rightContainer: {
    flexDirection: "column",
  },
  reviewContainer: {
    width: "90%",
  },
})

const ReviewCard = ({ review, title }) => {
  const dateFormatted = parseDate(review.createdAt).format("DD.MM.YYYY")

  return (
    <Card style={styles.container}>
      {/* rating info */}
      <View style={styles.ratingContainer}>
        <Text color="primary" fontSize="subheading" fontWeight="bold">
          {review.rating}
        </Text>
      </View>

      {/* right side stuff */}
      <View style={styles.rightContainer}>
        {/* Username */}
        <Text fontWeight="bold" fontSize="subheading" style={styles.text}>
          {title}
        </Text>

        {/* Created Date */}
        <Text color="textSecondary" style={styles.text}>
          {dateFormatted}
        </Text>

        {/* review text */}
        <View style={styles.reviewContainer}>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
    </Card>
  )
}

export default ReviewCard
