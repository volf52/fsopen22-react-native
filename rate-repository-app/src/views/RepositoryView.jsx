import { useState } from "react"

import Container from "../components/utils/Container"
import SearchBar from "../components/repository/SearchBar"
import OrderByPicker from "../components/repository/OrderByPicker"

import { ORDER_BY_OPTIONS } from "../components/repository/orderByOptions"
import RepositoryList from "../components/repository/RepositoryList"

import useRepositories from "../hooks/useRepositories"

const RepositoryView = () => {
  const [orderBy, setOrderBy] = useState(
    ORDER_BY_OPTIONS.LATEST_REPOSITORIES.value,
  )

  const [searchKeyword, setSearchKeyword] = useState("")

  const { repositories, loading } = useRepositories({
    order: orderBy,
    searchKeyword,
  })

  return (
    <Container>
      <Container>
        <SearchBar
          placeholder="Enter keyword..."
          onChangeText={setSearchKeyword}
          initValue={searchKeyword}
          disabled={loading}
        />
        <OrderByPicker
          orderByValue={orderBy}
          onOrderByChange={setOrderBy}
          disabled={loading}
        />
      </Container>

      <RepositoryList repositories={repositories} />
    </Container>
  )
}

export default RepositoryView
