import { describe, expect, it } from "@jest/globals"
import { render } from "@testing-library/react-native"

import RepositoryList from "../../../src/components/repository/RepositoryList"

const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
    startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
  },
  edges: [
    {
      node: {
        id: "jaredpalmer.formik",
        fullName: "jaredpalmer/formik",
        description: "Build forms in React, without the tears",
        language: "TypeScript",
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
      },
      cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
    },
    {
      node: {
        id: "async-library.react-async",
        fullName: "async-library/react-async",
        description: "Flexible promise-based React data loader",
        language: "JavaScript",
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/54310907?v=4",
      },
      cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
    },
  ],
}

describe("RepositoryList", () => {
  describe("List (Flatlist)", () => {
    it("renders repository info correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryList repositories={repositories} />,
      )

      const repoItems = getAllByTestId("repositoryItem")
      const nodes = repositories.edges.map((e) => e.node)

      expect(repoItems).toHaveLength(2)

      const [firstItem, secondItem] = repoItems

      const pairs = [
        { item: firstItem, node: nodes[0] },
        { item: secondItem, node: nodes[1] },
      ]

      pairs.forEach(({ item, node }) => {
        expect(item).toHaveTextContent(node.fullName)
        expect(item).toHaveTextContent(node.description)
        expect(item).toHaveTextContent(node.language)
        expect(item).toHaveTextContent(node.ratingAverage)
        expect(item).toHaveTextContent(node.reviewCount)
      })
    })
  })
})
