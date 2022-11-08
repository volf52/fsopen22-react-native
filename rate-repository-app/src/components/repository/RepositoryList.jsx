import { FlatList, View } from "react-native"
import { useNavigate } from "react-router-native"

import DummyFooter from "../utils/DummyFooter"
import ItemSeperator from "../utils/ItemSeperator"
import PressableRepoItem from "./PressableRepoItem"

const RepositoryList = ({ repositories }) => {
  const repoNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const navigate = useNavigate()

  const onPress = (id) => {
    navigate(`/repo/${id}`)
  }

  return (
    <>
      <View>
        <FlatList
          data={repoNodes}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <PressableRepoItem repo={item} onPress={() => onPress(item.id)} />
          )}
          ItemSeparatorComponent={ItemSeperator}
          ListFooterComponent={DummyFooter}
        />
      </View>
    </>
  )
}

export default RepositoryList
