export const OrderByValues = {
  latest: "latest",
  highest: "highestRated",
  lowest: "lowestRated",
}

export const ORDER_BY_OPTIONS = {
  LATEST_REPOSITORIES: {
    label: "Latest repositories",
    value: OrderByValues.latest,
  },
  HIGHEST_RATED_REPOSITORIES: {
    label: "Highest rated repositories",
    value: OrderByValues.highest,
  },
  LOWEST_RATED_REPOSITORIES: {
    label: "Lowest rated repositories",
    value: OrderByValues.lowest,
  },
}

export const OrderByQueryOptions = {
  [OrderByValues.latest]: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  },
  [OrderByValues.highest]: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  [OrderByValues.lowest]: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  },
}
