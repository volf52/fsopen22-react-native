import { View } from "react-native"
import { useField } from "formik"
import { Input, Text, AlertDialog } from "native-base"

import theme from "../../utils/theme"

const marginTop = Math.floor(theme.form.input.marginVertical / 2)

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <View>
      <Input
        isFullWidth={true}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        borderRadius="lg"
        borderColor={showError ? "red.500" : "gray.300"}
        size="lg"
        marginTop={marginTop}
        {...props}
      />

      {showError && <Text color="red.800">{meta.error}</Text>}
    </View>
  )
}

export default FormikTextInput
