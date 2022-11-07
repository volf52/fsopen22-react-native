import { Text, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
})

const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

export default Container
