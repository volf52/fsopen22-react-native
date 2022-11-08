import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../graphql/queries"

import { OrderByQueryOptions } from "../components/repository/orderByOptions"

const useRepositories = ({ order, searchKeyword, first }) => {
  const variables = {
    ...OrderByQueryOptions[order],
    searchKeyword,
    first,
  }

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  })

  const repositories = data?.repositories

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) return

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    repositories: data?.repositories,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  }
}

export default useRepositories
