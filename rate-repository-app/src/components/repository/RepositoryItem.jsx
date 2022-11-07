import { StyleSheet, View } from "react-native"
import theme from "../../theme"
import RepositoryItemContent from "./RepositoryItemContent"

import RepositoryItemHeader from "./RepositoryItemHeader"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
})

const RepositoryItem = ({ item: repository }) => {
  // render repository item on react native
  return (
    <View style={styles.container}>
      {/* header */}
      <RepositoryItemHeader repository={repository} />

      {/* content */}
      <RepositoryItemContent repository={repository} />
    </View>
  )
}

{
  /* <Text style={styles.text}>Full name: {item.fullName}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>
      <Text style={styles.text}>Language: {item.language}</Text>
      <Text style={styles.text}>Stars: {item.stargazersCount}</Text>
      <Text style={styles.text}>Forks: {item.forksCount}</Text>
      <Text style={styles.text}>Reviews: {item.reviewCount}</Text>
      <Text style={styles.text}>Rating: {item.ratingAverage}</Text> */
}

export default RepositoryItem
