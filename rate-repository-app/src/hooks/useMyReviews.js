import { useQuery } from "@apollo/client"

import { GET_ME } from "../graphql/queries"

const useMyReviews = ({ first }) => {
  const { data, loading, error, fetchMore, ...result } = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network",
    variables: { first, includeReviews: true },
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me?.reviews.pageInfo.hasNextPage

    if (!canFetchMore) return

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        first,
        includeReviews: true,
      },
    })
  }

  return {
    reviews: data?.me?.reviews,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  }
}

export default useMyReviews
