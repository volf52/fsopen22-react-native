import { Picker } from "@react-native-picker/picker"

import { ORDER_BY_OPTIONS } from "./orderByOptions"

const OrderByPicker = ({ orderByValue, onOrderByChange, enabled }) => {
  return (
    <Picker
      selectedValue={orderByValue}
      onValueChange={onOrderByChange}
      enabled={enabled}
    >
      <Picker.Item
        label="Select an item..."
        value=""
        enabled={false}
        style={{ color: "gray" }}
      />
      <Picker.Item
        label={ORDER_BY_OPTIONS.LATEST_REPOSITORIES.label}
        value={ORDER_BY_OPTIONS.LATEST_REPOSITORIES.value}
      />
      <Picker.Item
        label={ORDER_BY_OPTIONS.HIGHEST_RATED_REPOSITORIES.label}
        value={ORDER_BY_OPTIONS.HIGHEST_RATED_REPOSITORIES.value}
      />
      <Picker.Item
        label={ORDER_BY_OPTIONS.LOWEST_RATED_REPOSITORIES.label}
        value={ORDER_BY_OPTIONS.LOWEST_RATED_REPOSITORIES.value}
      />
    </Picker>
  )
}

export default OrderByPicker
