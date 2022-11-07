import { Text, FlatList, StyleSheet, View } from "react-native"

import RepositoryItem from "./RepositoryItem"

import useRepoDetails from "../../hooks/useRepositoryDetails"
import Container from "../utils/Container"
import ReviewItem from "./ReviewItem"
import ItemSeperator from "../utils/ItemSeperator"
import theme from "../../utils/theme"
import DummyFooter from "../utils/DummyFooter"

const styles = StyleSheet.create({
  bottom: {
    marginBottom: theme.separator + 10,
  },
})

const RepoDetailsContainer = ({ repoId }) => {
  const { repository, loading, error } = useRepoDetails(repoId)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error}</Text>

  const reviews = repository.reviews.edges.map((edge) => edge.node)

  return (
    <Container>
      <FlatList
        data={reviews}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <ReviewItem review={item} />}
        ListHeaderComponent={<RepositoryItem repo={repository} withGithub />}
        ListHeaderComponentStyle={styles.bottom}
        ItemSeparatorComponent={ItemSeperator}
        ListFooterComponent={DummyFooter}
      />
    </Container>
  )
}

export default RepoDetailsContainer
