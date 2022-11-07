import { View, StyleSheet } from "react-native"
import Constants from "expo-constants"

import AppBarTab from "./AppBarTab"

import theme from "../../theme"

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
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" link="/" />
      <AppBarTab text="Sign in" link="/login" />
    </View>
  )
}

export default AppBar
