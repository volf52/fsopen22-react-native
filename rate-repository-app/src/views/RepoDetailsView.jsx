import { useParams } from "react-router-native"

import RepoDetailsContainer from "../components/repository/RepoDetailsContainer"
import Container from "../components/utils/Container"

const RepoDetailsView = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <Container>
      <RepoDetailsContainer repoId={id} />
    </Container>
  )
}

export default RepoDetailsView
