import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../graphql/queries"

import { OrderByQueryOptions } from "../components/repository/orderByOptions"

const useRepositories = ({ order }) => {
  const variables = {
    ...OrderByQueryOptions[order],
  }

  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  })

  return { repositories: data?.repositories, loading, refetch }
}

export default useRepositories
