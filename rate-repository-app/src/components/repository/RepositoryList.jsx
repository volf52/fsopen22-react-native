import { FlatList, View, StyleSheet } from "react-native"
import { useNavigate } from "react-router-native"

import DummyFooter from "../utils/DummyFooter"
import ItemSeperator from "../utils/ItemSeperator"
import PressableRepoItem from "./PressableRepoItem"
import OrderByPicker from "./OrderByPicker"

import theme from "../../utils/theme"

const styles = StyleSheet.create({
  header: {
    padding: theme.separator,
  },
})

const RepositoryList = ({
  repositories,
  orderByValue,
  onOrderByChange,
  enabled,
}) => {
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
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <OrderByPicker
                orderByValue={orderByValue}
                onOrderByChange={onOrderByChange}
                enabled={enabled}
              />
            </View>
          )}
          ItemSeparatorComponent={ItemSeperator}
          ListFooterComponent={DummyFooter}
        />
      </View>
    </>
  )
}

export default RepositoryList
