import { View, StyleSheet, ScrollView } from "react-native"
import Constants from "expo-constants"

import AppBarTab from "./AppBarTab"

import theme from "../../utils/theme"
import useAuthStorage from "../../hooks/useAuthStorage"
import { useNavigate } from "react-router-native"
import useAuthorizedUser from "../../hooks/useAuthorizedUser"
import { useApolloClient } from "@apollo/client"

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bg.bar,
    paddingHorizontal: Constants.statusBarHeight,
    height: 75,
    flexDirection: "row",
  },
})

const AppBar = () => {
  const authStorage = useAuthStorage()
  const navigate = useNavigate()
  const apolloClient = useApolloClient()

  const authorizedUser = useAuthorizedUser()

  const logout = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
    navigate("/login")
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />

        {authorizedUser ? (
          <>
            <AppBarTab text="Create a review" link="/create-review" />
            <AppBarTab text="Sign out" onPress={logout} />
          </>
        ) : (
          <>
            <AppBarTab text="Sign in" link="/login" />
            <AppBarTab text="Sign Up" link="/signup" />
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
