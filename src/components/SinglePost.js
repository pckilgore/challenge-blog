import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Post from './Post'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const SinglePost = ({ posts = [], match }) => {
  const post = posts && posts.find(post => post.id === match.params.id)
  return (
    <Fragment>
      <Post post={post} />
      <div className="comments">
        <CommentList post={post} />
        <CommentForm post={post} />
      </div>
    </Fragment>
  )
}

export default SinglePost

SinglePost.propTypes = {
  posts: PropTypes.array.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
}
