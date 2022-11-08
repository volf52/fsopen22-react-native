import { Button } from "native-base"

import theme from "../../utils/theme"

const borderRadius = theme.form.borderRadius - 5
const marginTop = theme.form.input.marginVertical

const FormButton = ({ onPress, text, loading, loadingText }) => {
  let txt = text
  if (loading) {
    txt = loadingText ? loadingText : "Submitting..."
  }

  return (
    <Button
      isDisabled={loading}
      onPress={onPress}
      borderRadius={borderRadius}
      marginTop={marginTop}
      size="lg"
    >
      {txt}
    </Button>
  )
}

export default FormButton
