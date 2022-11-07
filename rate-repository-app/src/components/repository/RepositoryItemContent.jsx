import { View, StyleSheet } from "react-native"

import Text from "../utils/Text"

const styles = StyleSheet.create({
  content: {
    padding: 5,
    marginVertical: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 25,
  },
  contentItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
})

const Item = ({ label, count }) => {
  if (count > 1000) {
    count = (count / 1000).toFixed(1) + "k"
  }

  return (
    <View style={styles.contentItem}>
      <Text fontWeight="bold" fontSize="subheading">
        {count}
      </Text>
      <Text fontWeight="bold" color="textSecondary">
        {label}
      </Text>
    </View>
  )
}

const RepositoryItemContent = ({ repository }) => {
  const { stargazersCount, forksCount, ratingAverage, reviewCount } = repository

  return (
    <View style={styles.content}>
      <Item label="Stars" count={stargazersCount} />
      <Item label="Forks" count={forksCount} />
      <Item label="Reviews" count={reviewCount} />
      <Item label="Rating" count={ratingAverage} />
    </View>
  )
}

export default RepositoryItemContent
