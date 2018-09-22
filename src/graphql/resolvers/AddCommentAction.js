import { graphql } from 'react-apollo'

import AddCommentMutation from '../mutations/AddCommentMutation'
import AllPostsQuery from '../queries/AllPostsQuery'

const options = {
  refetchQueries: [{ query: AllPostsQuery }],
  update: (dataProxy, { data: { addComment } }) => {
    const query = AllPostsQuery
    const data = dataProxy.readQuery({ query })

    data.allPost.posts
      .filter(post => post.id !== addComment.id)
      .concat(addComment)

    dataProxy.writeQuery({ query, data })
  },
}

const mapPostToProps = props => {
  const oldPost = { ...props.ownProps.post }
  oldPost.comments = oldPost.comments || []

  return {
    onAdd: comment => {
      return props.mutate({
        variables: comment,
        optimisticResponse: {
          addComment: {
            ...oldPost,
            comments: [
              ...oldPost.comments,
              {
                __typename: 'Post',
                lastUpdated: Date.now(),
                ...comment,
              },
            ],
          },
        },
      })
    },
  }
}

export default graphql(AddCommentMutation, {
  props: mapPostToProps,
  options,
})
