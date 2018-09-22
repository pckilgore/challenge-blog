import React, { Fragment } from 'react'
import Post from './Post'
import CommentList from './CommentList'

const SinglePost = ({ post = {} }) => (
  <Fragment>
    <Post post={post} />
    <CommentList post={post} />
  </Fragment>
)

export default SinglePost
