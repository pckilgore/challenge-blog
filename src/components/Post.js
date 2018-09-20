import React from 'react'

const Post = ({ post, tease }) => (
  <div className="post" key={post.id}>
    <div className="header">
      <img src={post.imageUrl} alt="" className={tease && 'tease'} />
      <div className="title-text">
        <h1>{post.title}</h1>
        <h2>by {post.author}</h2>
      </div>
    </div>
    {tease ? null : <p>{post.content}</p>}
  </div>
)

export default Post
