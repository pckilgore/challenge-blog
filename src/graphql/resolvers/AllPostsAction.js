import { graphql } from 'react-apollo'

import AllPostsQuery from '../queries/AllPostsQuery'
import NewPostsSubscription from '../subscriptions/NewPostsSubscription'

import { reverseChronByKey } from './utils'

const mapPostsProps = props => {
  const posts =
    props.data.allPost &&
    [...props.data.allPost.posts].sort(reverseChronByKey('lastUpdated'))

  const updateQuery = (prev, newData) => {
    const newPost = newData.subscriptionData.data.newPost
    const oldPosts = prev.allPost.posts
    return {
      ...prev,
      allPost: {
        posts: [newPost, ...oldPosts.filter(post => post.id !== newPost.id)],
        __typename: 'PaginatedPosts',
      },
    }
  }

  const subscribeToNewPosts = params =>
    props.data.subscribeToMore({ document: NewPostsSubscription, updateQuery })

  return { posts, subscribeToNewPosts }
}

export default graphql(AllPostsQuery, {
  options: { fetchPolicy: 'cache-and-network' },
  props: mapPostsProps,
})
