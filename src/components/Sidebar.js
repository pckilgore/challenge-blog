import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const HomeButton = ({ shouldRenderOn: render }) =>
  render ? (
    <div className="home hover" alt="Navigate to Homepage">
      <Link to="/"> {'<<'} back to homepage </Link>
    </div>
  ) : null

const NewPostButton = ({ shouldRenderOn: render }) =>
  render ? (
    <div className="new-post" alt="New Post Button">
      <Link to="/post/new">New post</Link>
    </div>
  ) : null

const Sidebar = ({ posts = [], location }) => (
  <div className="sidebar">
    <NewPostButton shouldRenderOn={location.pathname !== '/post/new'} />
    <HomeButton shouldRenderOn={location.pathname !== '/'} />

    <h3>Published Posts</h3>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <NavLink to={`/post/${post.id}`} activeClassName="active">
            {post.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)

export default withRouter(Sidebar)
