import gql from 'graphql-tag'

export default gql`
  mutation addPost(
    $author: String!
    $title: String!
    $content: String!
    $imageUrl: String
    $status: String!
  ) {
    addPost(
      author: $author
      title: $title
      content: $content
      imageUrl: $imageUrl
      status: $status
    ) {
      __typename
      id
      author
      title
      content
      imageUrl
      status
      lastUpdated
      version
    }
  }
`
