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
  return (
    <View style={styles.container} testID="repositoryItem">
      <RepositoryItemHeader repository={repository} />
      <RepositoryItemContent repository={repository} />
    </View>
  )
}

export default RepositoryItem
