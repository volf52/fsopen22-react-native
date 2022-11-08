import { useQuery } from "@apollo/client"
import { GET_REPOSITORY } from "../graphql/queries"

const useRepositoryDetails = ({ id, first }) => {
  const variables = {
    id,
    first,
  }

  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables,
  })

  const handleFetchMore = () => {
    const canFetch = !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetch) return

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    repository: data?.repository,
    loading,
    error,
    fetchMore: handleFetchMore,
  }
}

export default useRepositoryDetails
