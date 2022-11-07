import { gql } from "@apollo/client"

export const REPO_CORE = gql`
  fragment RepoCore on Repository {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
  }
`
