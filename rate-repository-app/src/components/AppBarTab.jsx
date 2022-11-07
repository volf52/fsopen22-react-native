import { Pressable, StyleSheet, Text } from "react-native"

import theme from "../theme"

const styles = StyleSheet.create({
  item: {
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  text: {
    color: theme.colors.textWhite,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
})

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default AppBarTab
