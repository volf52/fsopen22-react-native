import { StatusBar } from "expo-status-bar"
import { NativeRouter } from "react-router-native"

import Main from "./src/views/Main"

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>

      <StatusBar style="auto" />
    </>
  )
}

export default App
