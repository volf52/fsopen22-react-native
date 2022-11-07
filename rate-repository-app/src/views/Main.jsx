import { StyleSheet, View } from "react-native"
import { Route, Routes, Navigate } from "react-router-native"

import AppBar from "../components/nav/AppBar"
import RepositoryView from "./RepositoryView"
import SignInView from "./SignInView"

import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.bg.main,
    // minHeight: Dimensions.get("window").height,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Routes>
        <Route path="/" exact element={<RepositoryView />} />
        <Route path="/login" exact element={<SignInView />} />
        <Route path="*" replace element={<Navigate to="/" />} />
      </Routes>
    </View>
  )
}

export default Main
