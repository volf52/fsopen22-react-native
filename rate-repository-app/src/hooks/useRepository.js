import { useQuery } from "@apollo/client"
import { GET_REPOSITORY } from "../graphql/queries"

const useRepoistory = (id) => {
  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  })

  const handleFetchMore = () => {}

  return {
    repository: data?.repository,
    loading,
    error,
    fetchMore: handleFetchMore,
  }
}

export default useRepoistory
