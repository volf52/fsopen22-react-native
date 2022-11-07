import { Text } from "react-native"

import RepositoryItem from "./RepositoryItem"

import useRepoDetails from "../../hooks/useRepository"
import Container from "../utils/Container"

const RepoDetailsContainer = ({ repoId }) => {
  const { repository, loading, error } = useRepoDetails(repoId)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error}</Text>

  return (
    <Container>
      <RepositoryItem repo={repository} withGithub />
    </Container>
  )
}

export default RepoDetailsContainer
