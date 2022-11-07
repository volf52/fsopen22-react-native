import { useParams } from "react-router-native"

import RepoDetailsContainer from "../components/repository/RepoDetailsContainer"

const RepoDetailsView = () => {
  const { id } = useParams()

  if (!id) return null

  return <RepoDetailsContainer repoId={id} />
}

export default RepoDetailsView
