import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const posts = [
  {
    id: '1',
    title: 'My first post',
    author: 'Someone',
    content: 'My first post',
    imageUrl: 'https://www.fillmurray.com/g/600/200',
    status: 'PUBLISHED',
  },
  {
    id: '2',
    title: 'A second post',
    author: 'Someone else',
    content: 'My second post',
    imageUrl: 'https://www.fillmurray.com/g/600/200',
    status: 'PUBLISHED',
  },
  {
    id: '3',
    title: 'My last post',
    author: 'Stranger',
    content: 'My third post',
    imageUrl: 'https://www.fillmurray.com/g/600/200',
    status: 'PENDING',
  },
]

class App extends Component {
  state = { posts } // initalize with dummy data

  handleNewPost = post => {
    this.setState(state => ({
      posts: [...state.posts, post],
    }))
  }

  handleDeletePost = ({ id: deletedId }) => {
    this.setState(state => ({
      posts: [...state.posts.filter(post => post.id !== deletedId)],
    }))
  }

  handleEditPost = updatedPost => {
    this.setState({
      posts: [
        ...posts.map(post => (post.id === updatedPost.id ? updatedPost : post)),
      ],
    })
  }

  render() {
    const { posts } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Patrick's Blog</h1>
        </header>
        <main className="flex">
          <sidebar>
            <h3>Published Posts</h3>
            <ul>
              {posts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </sidebar>
          <content>
            {posts.map(post => {
              return (
                <div key={post.id} className="post">
                  <h1>{post.title}</h1>
                  <h2>by {post.author}</h2>
                  <p>{post.content}</p>
                </div>
              )
            })}
          </content>
        </main>
      </div>
    )
  }
}

export default App
