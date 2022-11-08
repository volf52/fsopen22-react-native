import { useEffect, useRef, useState } from "react"
import { Input, SearchIcon, CloseIcon } from "native-base"
import { debounce } from "throttle-debounce"
import { Pressable } from "react-native"

import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  closeContainer: {
    padding: 2,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "gray",
  },
})

const Closer = ({ onPress, visible }) => {
  return (
    visible && (
      <Pressable onPress={onPress}>
        <View style={styles.closeContainer}>
          <CloseIcon size="2" />
        </View>
      </Pressable>
    )
  )
}

const SearchBar = ({
  placeholder,
  onChangeText,
  style,
  initValue,
  disabled,
}) => {
  const [value, setValue] = useState(initValue)

  const debounceSearch = useRef(
    debounce(750, (value) => {
      console.log("Searching for: ", value)
      onChangeText(value)
    }),
  ).current

  useEffect(() => {
    return () => {
      console.log("Cancelling search for ", value)
      debounceSearch.cancel()
    }
  }, [debounceSearch])

  const handleInputChange = (value) => {
    setValue(value)
    debounceSearch(value)
  }

  return (
    <Input
      placeholder={placeholder}
      onChangeText={handleInputChange}
      value={value}
      py="2"
      px="1"
      my="3"
      bg="muted.100"
      borderRadius="10"
      width="100%"
      variant="outline"
      isDisabled={disabled}
      style={style}
      InputLeftElement={<SearchIcon size="5" ml="2" />}
      InputRightElement={
        <Closer
          visible={value}
          onPress={() => {
            handleInputChange("")
          }}
        />
      }
    />
  )
}

export default SearchBar
