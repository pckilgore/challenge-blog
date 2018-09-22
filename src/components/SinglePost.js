import React, { Fragment } from 'react'
import Post from './Post'
import CommentList from './CommentList'

const SinglePost = ({ post = {} }) => (
  <Fragment>
    <Post post={post} />
    <CommentList comments={post.comments || null} id={post.id} />
  </Fragment>
)

export default SinglePost
