import { useQuery } from "@apollo/client"

import { GET_ME } from "../graphql/queries"

const useAuthorizedUser = () => {
  const { data } = useQuery(GET_ME)

  return data?.me
}

export default useAuthorizedUser
