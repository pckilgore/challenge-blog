import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ post, tease }) => (
  <div className="post" key={post.id}>
    <div className="header">
      <img src={post.imageUrl} alt="" className={tease && 'tease'} />
      <div className="title-text">
        <h1>{post.title}</h1>
        <h2>by {post.author} </h2>
        <h2>
          {post.status === 'DRAFT'
            ? 'Unpublished Draft'
            : `Published on ${new Date(
                +post.lastUpdated
              ).toLocaleDateString()}`}
        </h2>
      </div>
    </div>
    {tease ? null : <p>{post.content}</p>}
  </div>
)

export default Post

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['DRAFT', 'PUBLISHED']).isRequired,
  }),
  tease: PropTypes.bool,
}
