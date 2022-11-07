import { StyleSheet, View, Image } from "react-native"

import theme from "../../theme"

import Text from "../utils/Text"

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  headerRight: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  description: {
    marginTop: 5,
  },
  languageContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
})

const RepositoryItemHeader = ({ repository }) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.avatar}
        source={{ uri: repository.ownerAvatarUrl }}
      />
      <View style={styles.headerRight}>
        <Text fontWeight="bold" fontSize="subheading">
          {repository.fullName}
        </Text>
        <Text
          color="textSecondary"
          fontSize="subheading"
          style={styles.description}
        >
          {repository.description}
        </Text>
        <View style={styles.languageContainer}>
          <Text color="white" fontWeight="bold">
            {repository.language}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItemHeader
