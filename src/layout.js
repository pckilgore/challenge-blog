import React from 'react'

// Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const Layout = ({ posts, children }) => (
  <div className="App">
    <Header />
    <main className="flex">
      <Sidebar posts={posts} />
      <div className="content">{children}</div>
    </main>
  </div>
)

export default Layout
