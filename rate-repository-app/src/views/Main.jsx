import Constants from "expo-constants"
import { StyleSheet, View } from "react-native"

import AppBar from "../components/AppBar"
import RepositoryView from "./RepositoryView"

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <RepositoryView />
    </View>
  )
}

export default Main
