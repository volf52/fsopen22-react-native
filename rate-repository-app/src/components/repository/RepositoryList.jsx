import { FlatList } from "react-native"

import ItemSeperator from "../utils/ItemSeperator"

import useRepositories from "../../hooks/useRepositories"
import RepositoryItem from "./RepositoryItem"

const RepositoryList = () => {
  const { repositories } = useRepositories()

  const repoNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repoNodes}
      ItemSeparatorComponent={ItemSeperator}
      renderItem={RepositoryItem}
    />
  )
}

export default RepositoryList
