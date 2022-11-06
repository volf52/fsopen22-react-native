import { StyleSheet, View, Text } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5,
  },
  text: {
    color: "black",
  },
})

const RepositoryItem = ({ item }) => {
  // render repository item on react native
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Full name: {item.fullName}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>
      <Text style={styles.text}>Language: {item.language}</Text>
      <Text style={styles.text}>Stars: {item.stargazersCount}</Text>
      <Text style={styles.text}>Forks: {item.forksCount}</Text>
      <Text style={styles.text}>Reviews: {item.reviewCount}</Text>
      <Text style={styles.text}>Rating: {item.ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem
