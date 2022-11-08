import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { relayStylePagination } from "@apollo/client/utilities"

import Constants from "expo-constants"

const uri =
  Constants.manifest.extra.gqlUrl || "http://192.168.10.8:4000/graphql"

const httpLink = createHttpLink({
  uri,
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
    User: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
})

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const token = await authStorage.getAccessToken()

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      }
    } catch (e) {
      console.error(e)
      return {
        headers,
      }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  })
}

export default createApolloClient
