import { Select } from "native-base"

import { ORDER_BY_OPTIONS } from "./orderByOptions"

const OrderByPicker = ({ orderByValue, onOrderByChange, disabled }) => {
  return (
    <Select
      selectedValue={orderByValue}
      onValueChange={onOrderByChange}
      placeholder="Select an item..."
      bg="muted.100"
      isDisabled={disabled}
      _selectedItem={{
        bg: "teal.600",
      }}
    >
      <Select.Item
        label={ORDER_BY_OPTIONS.LATEST_REPOSITORIES.label}
        value={ORDER_BY_OPTIONS.LATEST_REPOSITORIES.value}
      />
      <Select.Item
        label={ORDER_BY_OPTIONS.HIGHEST_RATED_REPOSITORIES.label}
        value={ORDER_BY_OPTIONS.HIGHEST_RATED_REPOSITORIES.value}
      />
      <Select.Item
        label={ORDER_BY_OPTIONS.LOWEST_RATED_REPOSITORIES.label}
        value={ORDER_BY_OPTIONS.LOWEST_RATED_REPOSITORIES.value}
      />
    </Select>
  )
}

export default OrderByPicker
