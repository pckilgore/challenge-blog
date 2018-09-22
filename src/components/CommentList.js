import React, { Fragment } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'

const NoComments = () => <h2>No comments</h2>

const Comments = ({ comments }) => (
  <Fragment>
    <h2>Comments</h2>
    <ul>
      {[...comments]
        .sort((a, b) => +a.lastUpdated - +b.lastUpdated)
        .map((comment, idx) => (
          <Comment comment={comment} key={comment.lastUpdated} even={idx % 2} />
        ))}
    </ul>
  </Fragment>
)

const CommentList = ({ post }) => (
  <div className="comments">
    {post.comments ? <Comments {...post} /> : <NoComments />}
    <CommentForm post={post} />
  </div>
)

export default CommentList
