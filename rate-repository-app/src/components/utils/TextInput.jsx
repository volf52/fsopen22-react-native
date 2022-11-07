import { TextInput as NativeTextInput, StyleSheet } from "react-native"
import theme from "../../utils/theme"

const styles = StyleSheet.create({
  error: {
    borderColor: theme.colors.error,
  },
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.bg.main,
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.container, error && styles.error, style]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
