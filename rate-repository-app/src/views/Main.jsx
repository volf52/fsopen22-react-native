import { StyleSheet, View } from "react-native"
import { Route, Routes, Navigate } from "react-router-native"

import AppBar from "../components/nav/AppBar"

import RepositoryView from "./RepositoryView"
import SignInView from "./SignInView"
import RepoDetailsView from "./RepoDetailsView"
import CreateReviewView from "./CreateReviewView"

import theme from "../utils/theme"
import SignUpView from "./SignUpView"

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
        <Route path="/repo/:id" exact element={<RepoDetailsView />} />
        <Route path="/create-review" exact element={<CreateReviewView />} />
        <Route path="/signup" exact element={<SignUpView />} />
        <Route path="*" replace element={<Navigate to="/" />} />
      </Routes>
    </View>
  )
}

export default Main
