import gql from 'graphql-tag'

export default gql`
  subscription NewPostSub {
    newPost {
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
        content
        lastUpdated
      }
    }
  }
`
