import React, { Fragment } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'

const NoComments = () => <h2>No comments</h2>

const Comments = ({ comments }) => (
  <Fragment>
    <h2>Comments</h2>
    <ul>
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} even={comment.id % 2} />
      ))}
    </ul>
  </Fragment>
)

const CommentList = props => (
  <div className="comments">
    {props.comments ? <Comments {...props} /> : <NoComments />}
    <CommentForm id={props.id} />
  </div>
)

export default CommentList
