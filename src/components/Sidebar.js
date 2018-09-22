import React, { Fragment } from 'react'
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

const DraftPosts = ({ posts, shouldRenderOn: render }) => {
  const drafts = posts.filter(post => post.status === 'DRAFT').map(post => (
    <li key={post.id}>
      <NavLink to={`/post/${post.id}`} activeClassName="active">
        {post.title}
      </NavLink>
    </li>
  ))

  return render ? (
    <Fragment>
      <h3>Draft Posts</h3>
      <ul>{drafts.length ? drafts : <li className="home">NONE</li>}</ul>
    </Fragment>
  ) : null
}

const Sidebar = ({ posts = [], location }) => (
  <div className="sidebar">
    <NewPostButton shouldRenderOn={location.pathname !== '/post/new'} />
    <HomeButton shouldRenderOn={location.pathname !== '/'} />
    <DraftPosts
      shouldRenderOn={location.pathname === '/post/new'}
      {...{ posts }}
    />

    <h3>Published Posts</h3>
    <ul>
      {posts.filter(post => post.status === 'PUBLISHED').map(post => (
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
