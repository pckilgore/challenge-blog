import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const HomeButton = ({ shouldRender }) =>
  shouldRender ? (
    <Link to="/">
      <div className="home">back to homepage...</div>
    </Link>
  ) : null

const Sidebar = ({ posts = [], location }) => (
  <div className="sidebar">
    <Link to="/post/new">
      <div className="new-post">New post</div>
    </Link>
    <HomeButton shouldRender={location.pathname !== '/'} />
    <h3>Published Posts</h3>
    <ul>
      {posts.map(post => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <li>{post.title}</li>
        </Link>
      ))}
    </ul>
  </div>
)

export default withRouter(Sidebar)
