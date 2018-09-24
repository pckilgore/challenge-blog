export const typeDefs = `
type Comment {
  author: String!
  lastUpdated: String!
  content: String!
}

type Mutation {
  addComment(id: ID!, author: String!, content: String!): Post!
  addPost(
    author: String!,
    title: String!,
    content: String!,
    imageUrl: String,
    status: String!
  ): Post!
}

type PaginatedPosts {
  posts: [Post!]!
  nextToken: String
}

type Post {
  id: ID!
  author: String!
  title: String!
  content: String!
  imageUrl: String!
  lastUpdated: String!
  status: String!
  version: Int!
  comments: [Comment!]
}

type Query {
  allPost(count: Int, nextToken: String): PaginatedPosts!
}

type Subscription {
  newPost: Post
}

schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}
`
