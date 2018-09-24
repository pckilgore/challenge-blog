import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

const NoComments = () => <h2>No comments</h2>

const Comments = ({ comments }) => (
  <Fragment>
    <h2>Comments</h2>
    <ul>
      {[...comments]
        .sort((a, b) => +a.lastUpdated - +b.lastUpdated)
        .map((comment, idx) => (
          <Comment
            {...comment}
            key={comment.lastUpdated}
            even={Boolean(idx % 2)}
          />
        ))}
    </ul>
  </Fragment>
)

const CommentList = ({ post }) =>
  post.comments && post.comments.length ? (
    <Comments {...post} />
  ) : (
    <NoComments />
  )

export default CommentList

CommentList.propTypes = {
  post: PropTypes.object,
}

Comments.propTypes = {
  comments: PropTypes.array,
}
