import { Pressable } from "react-native"

import RepositoryItem from "./RepositoryItem"

const PressableRepoItem = ({ repo, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <RepositoryItem repo={repo} withGithub={false} />
    </Pressable>
  )
}

export default PressableRepoItem
