import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'

const PostsList = ({ posts }) =>
  posts.map(post => (
    <div className="hover" key={post.id}>
      <Link to={`/post/${post.id}`}>
        <Post post={post} tease={true} />
      </Link>
    </div>
  ))

const Home = ({ posts = [] }) => {
  const publishedPosts = posts.filter(post => post.status === 'PUBLISHED')
  return publishedPosts.length ? (
    <PostsList posts={publishedPosts} />
  ) : (
    <h2>No Published Posts</h2>
  )
}

export default Home
