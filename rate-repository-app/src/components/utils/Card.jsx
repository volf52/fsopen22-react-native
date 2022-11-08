import { View, StyleSheet } from "react-native"

import theme from "../../utils/theme"

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: 10,
    borderRadius: 10,
  },
})

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>
}

export default Card
