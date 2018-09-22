import { graphql } from 'react-apollo'

import AddPostMutation from '../mutations/AddPostMutation'
import AllPostsQuery from '../queries/AllPostsQuery'

const options = {
  refetchQueries: [{ query: AllPostsQuery }],
  update: (dataProxy, { data: { addPost } }) => {
    const query = AllPostsQuery
    const data = dataProxy.readQuery({ query })

    data.allPost.posts.push(addPost)

    dataProxy.writeQuery({ query, data })
  },
}

const mapPostToProps = props => ({
  onAdd: post =>
    props.mutate({
      variables: post,
      optimisticResponse: {
        addPost: {
          __typename: 'Post',
          id: '',
          imageUrl: '',
          ...post,
          lastUpdated: Date.now(),
          version: 1,
        },
      },
    }),
})

export default graphql(AddPostMutation, {
  props: mapPostToProps,
  options,
})
