import { View, Text, Pressable, StyleSheet } from "react-native"

import FormikTextInput from "../forms/FormikTextInput"

import theme from "../../utils/theme"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 25,
  },
  btn: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    textAlign: "center",
    color: theme.colors.textWhite,
  },
  textInput: {
    marginVertical: 5,
  },
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.textInput}
        testID="usernameField"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.textInput}
        testID="passwordField"
      />
      <Pressable onPress={onSubmit} style={styles.btn} testID="submitButton">
        <Text style={styles.btnText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm
