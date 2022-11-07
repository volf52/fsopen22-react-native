import { View, StyleSheet } from "react-native"
import Constants from "expo-constants"

import AppBarTab from "./AppBarTab"

import theme from "../../theme"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bg.bar,
    paddingHorizontal: Constants.statusBarHeight,
    height: 75,
    flexDirection: "row",
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  )
}

export default AppBar
