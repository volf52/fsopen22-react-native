import { Pressable, StyleSheet } from "react-native"

import Text from "./Text"

import theme from "../../utils/theme"

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.primary,
    padding: theme.form.padding,
    borderRadius: theme.form.borderRadius - 5,
    marginTop: theme.form.input.marginVertical + 5,
  },
  btnText: {
    textAlign: "center",
  },
  btnLoading: {
    backgroundColor: theme.colors.textSecondary,
  },
})

const FormButton = ({ onPress, text, loading, loadingText }) => {
  const btnStyle = [styles.btn, loading && styles.btnLoading]

  let txt = text
  if (loading) {
    txt = loadingText ? loadingText : "Submitting..."
  }

  return (
    <Pressable disabled={loading} onPress={onPress} style={btnStyle}>
      <Text style={styles.btnText} color="white">
        {txt}
      </Text>
    </Pressable>
  )
}

export default FormButton
