import { View, Text, Pressable, StyleSheet } from "react-native"

import FormikTextInput from "../forms/FormikTextInput"

import theme from "../../theme"

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
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.textInput}
      />
      <Pressable onPress={onSubmit} style={styles.btn}>
        <Text style={styles.btnText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm
