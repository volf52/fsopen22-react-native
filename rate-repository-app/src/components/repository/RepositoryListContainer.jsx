import { useState } from "react"

import useRepositories from "../../hooks/useRepositories"
import RepositoryList from "./RepositoryList"

import { ORDER_BY_OPTIONS, OrderByQueryOptions } from "./orderByOptions"

const RepositoryListContainer = () => {
  const [orderBy, setOrderBy] = useState(
    ORDER_BY_OPTIONS.LATEST_REPOSITORIES.value,
  )

  const { repositories, loading } = useRepositories({ order: orderBy })

  const onOrderByChange = (v) => {
    setOrderBy(v)
  }

  return (
    <RepositoryList
      repositories={repositories}
      orderByValue={orderBy}
      onOrderByChange={onOrderByChange}
      enabled={!loading}
    />
  )
}

export default RepositoryListContainer
