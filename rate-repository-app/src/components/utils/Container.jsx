import { Text, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
})

const Container = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
)

export default Container
