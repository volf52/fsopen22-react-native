import { View, StyleSheet } from "react-native"

import Text from "../components/utils/Text"

import utilStyles from "../utils/styles"
import RepositoryListContainer from "../components/repository/RepositoryListContainer"

const {
  padding10,
  padding5,
  flexRow,
  justifyCenter,
  view: viewStyle,
} = utilStyles

const styles = StyleSheet.create({
  container: [viewStyle, padding5],
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

      <RepositoryListContainer />
    </View>
  )
}

export default RepositoryView
