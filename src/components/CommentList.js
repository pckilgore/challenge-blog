import React from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'

const CommentList = ({ id, comments }) => (
  <div className="comments">
    <h2>Comments</h2>
    <ul>
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} even={comment.id % 2} />
      ))}
    </ul>
    <CommentForm id={id} />
  </div>
)

export default CommentList
