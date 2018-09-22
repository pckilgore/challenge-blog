import gql from 'graphql-tag'

export default gql`
  mutation addComment($id: ID!, $author: String!, $content: String!) {
    addComment(id: $id, author: $author, content: $content) {
      __typename
      id
      author
      title
      content
      imageUrl
      status
      lastUpdated
      version
      comments {
        author
        content
        lastUpdated
      }
    }
  }
`
