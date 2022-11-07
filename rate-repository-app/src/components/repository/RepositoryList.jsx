import { FlatList } from "react-native"

import ItemSeperator from "../utils/ItemSeperator"

import { repositories } from "../../data"
import RepositoryItem from "./RepositoryItem"

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeperator}
      renderItem={RepositoryItem}
    />
  )
}

export default RepositoryList
