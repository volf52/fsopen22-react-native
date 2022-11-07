import useRepositories from "../../hooks/useRepositories"
import RepositoryList from "./RepositoryList"

const RepositoryListContainer = () => {
  const { repositories } = useRepositories()

  return <RepositoryList repositories={repositories} />
}

export default RepositoryListContainer
