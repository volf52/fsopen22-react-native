import { StyleSheet, View, Button, Linking } from "react-native"
import theme from "../../utils/theme"
import Card from "../utils/Card"
import RepositoryItemContent from "./RepositoryItemContent"

import RepositoryItemHeader from "./RepositoryItemHeader"

const styles = StyleSheet.create({
  ghBtn: {
    backgroundColor: theme.colors.primary,
    padding: 15,
  },
})

const RepositoryItem = ({ repo, withGithub }) => {
  return (
    <Card testID="repositoryItem">
      <RepositoryItemHeader repo={repo} />
      <RepositoryItemContent repo={repo} />

      {withGithub && (
        <Button
          style={styles.ghBtn}
          onPress={() => Linking.openURL(repo.url)}
          title="Open in GitHub"
        />
      )}
    </Card>
  )
}

export default RepositoryItem
