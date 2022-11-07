import { StatusBar } from "expo-status-bar"
import { NativeRouter } from "react-router-native"
import { ApolloProvider } from "@apollo/client"

import Main from "./src/views/Main"

import AuthStorageContext from "./src/contexts/AuthStorageContext"
import AuthStorage from "./src/utils/authStorage"
import createApolloClient from "./src/utils/apolloClient"

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>

      <StatusBar style="auto" />
    </>
  )
}

export default App
