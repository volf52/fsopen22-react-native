import { View, StyleSheet } from "react-native"

import theme from "../../theme"

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
})

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}

export default Card
