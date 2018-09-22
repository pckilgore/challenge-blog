import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'

const Home = ({ posts = [] }) =>
  posts.filter(post => post.status === 'PUBLISHED').map(post => (
    <div className="hover" key={post.id}>
      <Link to={`/post/${post.id}`}>
        <Post post={post} tease="true" />
      </Link>
    </div>
  ))

export default Home
