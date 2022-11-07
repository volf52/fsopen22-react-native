import Constants from "expo-constants"
import { StyleSheet, View, Dimensions } from "react-native"

import AppBar from "../components/nav/AppBar"
import RepositoryView from "./RepositoryView"

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    minHeight: Dimensions.get("window").height,
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
