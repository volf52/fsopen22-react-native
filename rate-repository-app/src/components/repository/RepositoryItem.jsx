import { Linking } from "react-native"
import { Button } from "native-base"

import Card from "../utils/Card"
import RepositoryItemContent from "./RepositoryItemContent"

import RepositoryItemHeader from "./RepositoryItemHeader"

const RepositoryItem = ({ repo, withGithub }) => {
  const openGithub = () => {
    Linking.openURL(repo.url)
  }

  return (
    <Card testID="repositoryItem">
      <RepositoryItemHeader repo={repo} />
      <RepositoryItemContent repo={repo} />

      {withGithub && (
        <Button
          backgroundColor="primary.600"
          borderRadius={25}
          onPress={openGithub}
        >
          Open in Github
        </Button>
      )}
    </Card>
  )
}

export default RepositoryItem
