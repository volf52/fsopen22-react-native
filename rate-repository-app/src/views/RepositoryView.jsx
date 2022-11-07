import { View, StyleSheet } from "react-native"

import Text from "../components/Text"
import RepositoryList from "../components/RepositoryList"

import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.main,
    padding: 5,
  },
  heading: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
})

const RepositoryView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text fontSize="subheading" fontWeight="bold">
          Rate Repository Application
        </Text>
      </View>

      <RepositoryList />
    </View>
  )
}

export default RepositoryView
