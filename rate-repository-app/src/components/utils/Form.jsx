import { View, StyleSheet } from "react-native"

import theme from "../../utils/theme"

const styles = StyleSheet.create({
  form: {
    backgroundColor: theme.form.bg,
    borderRadius: theme.form.borderRadius,
    padding: theme.form.padding,
    margin: theme.form.margin,
  },
})

const Form = ({ children, style }) => {
  return <View style={[styles.form, style]}>{children}</View>
}

export default Form
