import AsyncStorage from "@react-native-async-storage/async-storage"

class AuthStorage {
  static TOKEN_KEY = "jwt"

  constructor(namespace = "auth") {
    this.namespace = namespace
    this.key = `${namespace}:${AuthStorage.TOKEN_KEY}`
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(this.key)

    return token
  }

  async setAccessToken(token) {
    await AsyncStorage.setItem(this.key, token)
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(this.key)
  }
}

export default AuthStorage
