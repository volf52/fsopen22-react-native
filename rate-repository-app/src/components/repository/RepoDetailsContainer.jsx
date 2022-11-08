import { Text, FlatList, StyleSheet } from "react-native"

import RepositoryItem from "./RepositoryItem"

import useRepoDetails from "../../hooks/useRepositoryDetails"
import ItemSeperator from "../utils/ItemSeperator"
import theme from "../../utils/theme"
import DummyFooter from "../utils/DummyFooter"
import ReviewCard from "../reviews/ReviewCard"

const styles = StyleSheet.create({
  bottom: {
    marginBottom: theme.separator + 10,
  },
})

export const RepositoryFlatList = ({ repository, onEndReach }) => {
  const reviews = repository.reviews.edges.map((edge) => edge.node)

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <ReviewCard review={item} title={item.user.username} />
      )}
      ListHeaderComponent={<RepositoryItem repo={repository} withGithub />}
      ListHeaderComponentStyle={styles.bottom}
      ItemSeparatorComponent={ItemSeperator}
      ListFooterComponent={DummyFooter}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

const RepoDetailsContainer = ({ repoId }) => {
  const { repository, loading, error, fetchMore } = useRepoDetails({
    id: repoId,
    first: 3,
  })

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error}</Text>

  if (!repository) return null

  return <RepositoryFlatList repository={repository} onEndReach={fetchMore} />
}

export default RepoDetailsContainer
