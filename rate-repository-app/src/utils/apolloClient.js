import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import Constants from "expo-constants"

const uri =
  Constants.manifest.extra.gqlUrl || "http://192.168.10.8:4000/graphql"

const httpLink = createHttpLink({
  uri,
})

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
