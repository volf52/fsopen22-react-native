import { Pressable, StyleSheet, Text, View } from "react-native"
import { Link } from "react-router-native"

import theme from "../../theme"

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  border: {
    borderColor: theme.colors.white,
    borderWidth: 1,
    padding: 5,
  },
  text: {
    color: theme.colors.textWhite,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
})

const AppBarTab = ({ text, link, onPress }) => {
  const textEl = <Text style={styles.text}>{text}</Text>

  return (
    <View style={styles.item}>
      <Pressable style={styles.border} onPress={onPress}>
        {link ? <Link to={link}>{textEl}</Link> : textEl}
      </Pressable>
    </View>
  )
}

export default AppBarTab
