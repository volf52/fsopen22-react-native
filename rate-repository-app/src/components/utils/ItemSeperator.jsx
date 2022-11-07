import { View, StyleSheet } from "react-native"
import theme from "../../utils/theme"

const styles = StyleSheet.create({
  separator: {
    height: theme.separator,
  },
})

const ItemSeperator = () => <View style={styles.separator} />

export default ItemSeperator
