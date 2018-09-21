// Helps for the resolvers.

export const reverseChronByKey = key => (first, second) =>
  second[key] - first[key]
