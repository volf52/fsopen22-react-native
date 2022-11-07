import { View, StyleSheet } from "react-native"

import Text from "../components/utils/Text"
import RepositoryList from "../components/repository/RepositoryList"

import theme from "../theme"
import utilStyles from "../utils/styles"

const { padding10, flexRow, justifyCenter, view: viewStyle } = utilStyles

const styles = StyleSheet.create({
  container: [
    viewStyle,
    {
      backgroundColor: theme.colors.bg.main,
      padding: 5,
    },
  ],
  heading: [flexRow, justifyCenter, padding10],
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
