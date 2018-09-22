import gql from 'graphql-tag'

export default gql`
  query AllPosts {
    allPost {
      posts {
        __typename
        id
        title
        author
        content
        lastUpdated
        imageUrl
        status
        version
        comments {
          author
          lastUpdated
          content
        }
      }
    }
  }
`
